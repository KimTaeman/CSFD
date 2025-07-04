import { Request, Response, NextFunction } from 'express';

// TODO: [HINT-001] Update user's hint setting.

export const updateHint = async (req: Request, res: Response, next: NextFunction) => {
  res.status(501).json({ message: 'Not Implemented' });
};
