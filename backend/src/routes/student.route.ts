import { Router } from 'express';
import * as Controller from '@/controllers';

const router = Router();

// POST

// GET
router.get('/juniors', Controller.getAllJuniors);
router.get('/:id', Controller.getStudentById);
router.get('/', Controller.getAllStudents);

// PUT

export default router;
