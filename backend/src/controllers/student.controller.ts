import { Request, Response, NextFunction } from 'express';
import * as Models from '@/models';
import { NotFoundError } from '@/errors/not-found-error';

// Placeholders - Replace with actual logic
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
    res.status(200).json({ success: true, message: 'fetched student', students });
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

export const updateStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = req.body;
    const id = Number(req.params.id);

    if (isNaN(id) || id <= 0) {
      const error = new Error('Invalid ID parameter. ID must be a positive integer.');
      error.status = 400; // Bad Request
      throw error;
    }
    const updated = await Models.updateStudentById(id, data);

    if (!updated) {
      throw new NotFoundError();
    }

    res.status(200).json({ data: updated });
  } catch (error) {
    next(error);
  }
};
