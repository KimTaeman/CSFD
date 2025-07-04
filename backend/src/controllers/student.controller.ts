import { Request, Response, NextFunction } from 'express';
import * as Models from '@/models';
import { AppError } from '@/middlewares/errorHandler';

// Placeholders - Replace with actual logic
export const getStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { id } = req.params;
  console.log(id);

  if (!id) {
    const error: AppError = new Error('Id not found');
    error.status = 404;
    return next(error);
  }

  try {
    const student = await Models.getStudentById(Number(id));

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

// export const getAllStudents = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const students = await studentModel.getAllStudents();

//     res.status(200).json({ success: true, message: 'fetched student', students });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({
//       success: false,
//       message: 'failed to fetch',
//     });
//   }
// };

// export const getAllSeniors = async (req: Request, res: Response) =>
//   res.status(200).json({ seniors: [] });

export const getAllJuniors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const juniors = await Models.getAllJuniors();
    return res.status(200).json({ juniors });
  } catch (error) {
    next(error);
  }
};
