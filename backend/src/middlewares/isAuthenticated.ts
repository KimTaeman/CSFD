import { Request, Response, NextFunction } from 'express';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.session?.user) {
    return next();
  }
  res.status(401).json({ success: null, message: 'Unauthorized: You must be logged in.' });
};

export default isAuthenticated;
