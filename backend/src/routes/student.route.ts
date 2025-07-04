import { Router } from 'express';
import * as studentController from '../controllers/student.controller';

const router = Router();

// POST

// GET
router.get('/:id', studentController.getStudentById);
router.get('/', studentController.getAllStudents);

// PUT

export default router;
