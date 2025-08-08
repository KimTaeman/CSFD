import { Request, Response, NextFunction } from 'express';
import * as Models from '@/models';
import { NotFoundError } from '@/errors/not-found-error';
import { UnauthorizedError } from '@/errors/not-authorized-error';
import { cloudinary } from '@/utils/cloudinary';
import config from '@/config/config';

export const getStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { id } = req.params;

  try {
    const student = await Models.getStudentById(Number(id));

    if (!student) {
      throw new NotFoundError();
    }

    res.status(200).json({ success: true, message: 'fetched student', student });
  } catch (error) {
    next(error);
  }
};

export const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const students = await Models.getAllStudents();

    if (!students) {
      throw new NotFoundError();
    }
    res.status(200).json({ success: true, message: 'fetched students', students });
  } catch (error) {
    next(error);
  }
};

export const getAllSeniors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const seniors = await Models.getAllSeniors();
    if (!seniors || seniors.length === 0) {
      throw new NotFoundError();
    }
    res.status(200).json({ success: true, data: seniors });
  } catch (error) {
    next(error);
  }
};

export const getAllJuniors = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const juniors = await Models.getAllJuniors();

    if (!juniors || juniors.length === 0) {
      throw new NotFoundError();
    }
    res.status(200).json({ data: juniors });
  } catch (error) {
    next(error);
  }
};

export const guessMentor = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { guess } = req.body;

  try {
    const guessingDeadline = new Date('2025-08-09T07:30:00.000Z'); // 14:30 Bangkok = 07:30 UTC
    const now = new Date();

    if (now > guessingDeadline) {
      return res.status(400).json({
        success: false,
        message: 'Guessing period has ended',
      });
    }
    const result = await Models.guessMentor(Number(id), guess);

    if (!result) {
      throw new NotFoundError();
    }

    res.status(200).json({ success: true, info: result });
  } catch (error) {
    next(error);
  }
};

export const guessCorrect = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const result = await Models.guessCorrect(Number(id));
    res.status(200).json({ success: true, info: result });
  } catch (error) {
    next(error);
  }
};

export const updateStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = req.body;
    const id = Number(req.params.id);
    if (!req.session.user?.id) {
      throw new UnauthorizedError('Not authenticated.');
    }

    const authenticatedUserId = req.session.user.id;

    if (id != authenticatedUserId) {
      throw new UnauthorizedError('You cannot edit this profile.');
    }

    if (isNaN(id) || id <= 0) {
      throw new NotFoundError();
    }

    delete data.displayName;
    delete data.studentId;

    const { profilePic: dataUri } = data;

    if (dataUri) {
      const uploaded = await cloudinary.uploader.upload(dataUri, {
        folder: 'csfd/profiles',
        transformation: [
          { width: 500, height: 667, crop: 'fill' },
          { quality: 'auto', fetch_format: 'auto' },
        ],
      });
      data.profilePic = uploaded.secure_url;
    } else {
      delete data.profilePic;
    }

    const updated = await Models.updateStudentById(id, data);

    res.status(200).json({ data: updated });
  } catch (error) {
    next(error);
  }
};

export const getMentorPairs = async (req: Request, res: Response, next: NextFunction) => {
  const adminIds = config.adminIds;
  const userId = req.session.user?.id;

  if (!userId || !adminIds.includes(userId)) {
    throw new UnauthorizedError('Access Forbidden');
  }

  try {
    const status = req.query.status as string | undefined;

    const pairs = await Models.getMentorPairs(status);
    res.json(pairs);
  } catch (error) {
    next(error);
  }
};
