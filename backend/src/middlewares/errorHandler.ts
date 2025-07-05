import { Request, Response, NextFunction } from 'express';
import { ErrorException } from '@/errors/error-exception';

export interface AppError extends Error {
  status?: number;
}

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ErrorException) {
    // console.log(err);
    res.status(err.status).json({
      success: false,
      err: err.serializeErrors(),
    });
  }

  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
};
