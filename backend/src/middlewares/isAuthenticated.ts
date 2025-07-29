import { Request, Response, NextFunction } from 'express';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.session?.user) {
    return next();
  }
  res
    .status(401)
    .json({ success: null, message: 'Access denied. Please authenticate to continue.' });
};

export default isAuthenticated;
