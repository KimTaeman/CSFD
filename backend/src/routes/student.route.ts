import { Router } from 'express';
import * as studentController from '../controllers/student.controller';
import * as Controller from '@/controllers';
import { Request, Response, NextFunction } from 'express';

const router = Router();

// POST

// GET
router.get('/juniors', (req: Request, res: Response, next: NextFunction) => {
  Controller.getAllJuniors(req, res, next);
});
router.get('/:id', studentController.getStudentById);
// PUT

export default router;
