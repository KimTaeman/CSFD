import { NextFunction, Request, Response } from 'express';
import msalClient from '@/config/msalConfig';
import { ResponseMode } from '@azure/msal-node';
import * as authModel from '@/models/auth.model';
import { AppError } from '@/middlewares/errorHandler';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const authCodeUrlParameters = {
    scopes: ['user.read', 'openid', 'profile', 'email'],
    redirectUri: process.env.BACKEND_REDIRECT_URI || '',
    responseMode: ResponseMode.FORM_POST,
  };
  try {
    const authUrl = await msalClient.getAuthCodeUrl(authCodeUrlParameters);
    res.redirect(authUrl);
  } catch (error) {
    next(error);
  }
};

export const callback = async (req: Request, res: Response, next: NextFunction) => {
  const tokenRequest = {
    code: req.body.code,
    scopes: ['user.read', 'openid', 'profile', 'email'],
    redirectUri: process.env.BACKEND_REDIRECT_URI || '',
  };

  try {
    const response = await msalClient.acquireTokenByCode(tokenRequest);
    const { account } = response;

    if (!account) {
      const error: AppError = new Error('No account information found');
      error.status = 400;
      throw error;
    }

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
      res.redirect(process.env.CLIENT_REDIRECT_URL || '/');
    });
  } catch (error) {
    next(error);
  }
};

export const completeRegistration = async (req: Request, res: Response, next: NextFunction) => {
  const { nickname, instagram, discord, line } = req.body;

  if (!req.session.user?.id) {
    const error: AppError = new Error('Not authenticated');
    error.status = 401;
    throw error;
  }

  const userId = req.session.user.id;
  if (!nickname) {
    const error: AppError = new Error('Nickname is required.');
    error.status = 400;
    throw error;
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
    next(error);
  }
};

export const getInfo = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.user?.id) {
    const error: AppError = new Error('Not authenticated');
    error.status = 401;
    throw error;
  }

  try {
    const student = await authModel.getStudentInfo(req.session.user.id);

    if (!student) {
      const error: AppError = new Error('Student not found');
      error.status = 404;
      throw error;
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
    next(error);
  }
};

export const logout = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      const error: AppError = new Error('Could not log out, please try again.');
      error.status = 500;
      throw error;
    }
    res.clearCookie('connect.sid');
    res.status(200).json({ message: 'Logout successful' });
  });
};
