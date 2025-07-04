import { Router } from 'express';
import * as studentController from '../controllers/student.controller';

const router = Router();

// POST

// GET
router.get('/:id', studentController.getStudentById);

// PUT

export default router;
