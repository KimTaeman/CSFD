import { Request, Response, NextFunction } from 'express';
import * as Models from '@/models';
import { NotFoundError } from '@/errors/not-found-error';

export const updateHint = async (req: Request, res: Response, next: NextFunction) => {
  const hints = req.body;

  if (!hints) {
    throw new NotFoundError();
  }

  try {
    const updatedHints = await Models.updateHint(hints);

    if (!updatedHints) {
      throw new NotFoundError();
    }

    res.status(200).json({
      success: true,
      message: 'Updated',
      updatedHints,
    });
  } catch (error) {
    next(error);
  }
};
