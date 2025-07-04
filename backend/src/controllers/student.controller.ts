import { Request, Response, NextFunction } from 'express';
import * as studentModel from '../models/student.model';
import { AppError } from '@/middlewares/errorHandler';

// Placeholders - Replace with actual logic
export const getStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { id } = req.params;

  try {
    const student = await studentModel.getStudentById(Number(id));

    if (!student) {
      const error: AppError = new Error('Student not found');
      error.status = 404;
      throw error;
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
    const students = await studentModel.getAllStudents();

    if (!students) {
      const error: AppError = new Error('Students not found');
      error.status = 404;
      throw error;
    }
    res.status(200).json({ success: true, message: 'fetched student', students });
  } catch (error) {
    next(error);
  }
};

export const getAllSeniors = async (req: Request, res: Response) =>
  res.status(200).json({ seniors: [] });
export const getAllJuniors = async (req: Request, res: Response) =>
  res.status(200).json({ juniors: [] });
