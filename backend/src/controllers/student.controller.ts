import { Request, Response, NextFunction } from 'express';
import * as Models from '@/models';
import { NotFoundError } from '@/errors/not-found-error';
import { UnauthorizedError } from '@/errors/not-authorized-error';
import { cloudinary } from '@/utils/cloudinary';

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
