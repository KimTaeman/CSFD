import msalClient from '@/config/msalConfig';
import * as authModel from '@/models/auth.model';

export const login = async (req, res) => {
  const authCodeUrlParameters = {
    scopes: ['user.read', 'openid', 'profile', 'email'],
    redirectUri: process.env.BACKEND_REDIRECT_URI,
    responseMode: 'form_post',
  };
  try {
    const authUrl = await msalClient.getAuthCodeUrl(authCodeUrlParameters);
    res.redirect(authUrl);
  } catch (error) {
    console.error('Error generating auth URL:', error);
    res.status(500).send('Error generating authentication URL.');
  }
};

export const callback = async (req, res) => {
  const tokenRequest = {
    code: req.body.code,
    scopes: ['user.read', 'openid', 'profile', 'email'],
    redirectUri: process.env.BACKEND_REDIRECT_URI,
  };

  try {
    const response = await msalClient.acquireTokenByCode(tokenRequest);
    console.log(response);
    const { account } = response;

    let student = await authModel.findStudentByMicrosoftId(account.homeAccountId);

    if (!student) {
      const existingStudent = await authModel.findStudentByEmail(account.username);

      if (existingStudent) {
        student = await authModel.updateStudentWithMicrosoftId(
          account.username,
          account.homeAccountId,
        );
      } else {
        student = await authModel.createNewStudent(account);
      }
    } else {
      student = await authModel.updateStudentProfile(account.homeAccountId, account);
    }

    req.session.user = {
      id: student.id,
      displayName: student.displayName,
      email: student.email,
      nickname: student.nickname,
      role: student.role,
    };

    req.session.save(() => {
      res.redirect(process.env.CLIENT_REDIRECT_URL);
    });
  } catch (error) {
    console.error('Error in auth callback:', error);
    res.status(500).redirect(process.env.CLIENT_LOGIN_URL + '?error=auth_failed');
  }
};

export const completeRegistration = async (req, res) => {
  const { nickname, instagram, discord, line } = req.body;
  const userId = req.session.user.id;
  if (!nickname) {
    return res.status(400).json({ message: 'Nickname is required.' });
  }
  try {
    const updatedUser = await authModel.completeRegistration(
      userId,
      nickname,
      instagram,
      discord,
      line,
    );
    req.session.user.nickname = updatedUser.nickname;
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ message: 'Error updating profile.' });
  }
};

export const getInfo = async (req, res) => {
  if (!req.session.user?.id) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const student = await authModel.getStudentInfo(req.session.user.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const isSenior = student.role === 'CS25';

    const responseData = {
      id: student.id,
      displayName: student.displayName,
      email: student.email,
      nickname: student.nickname,
      role: student.role,
      isSenior: isSenior,
      mentees: student.mentees.map((mentee) => ({
        id: mentee.junior.id,
        displayName: mentee.junior.displayName,
        nickname: mentee.junior.nickname,
        lives: student.lives || 3,
      })),
      hints: isSenior ? student.givenHints : student.receivedHints,
      house: student.house || null,
      instagram: student.instagram || null,
      discord: student.discord || null,
      line: student.line || null,
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).json({ message: 'Error fetching user information' });
  }
};

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Could not log out, please try again.' });
    }
    res.clearCookie('connect.sid');
    res.status(200).json({ message: 'Logout successful' });
  });
};
