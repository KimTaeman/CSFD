import { Router } from 'express';
import * as Controller from '@/controllers';

const router = Router();

// POST

// GET
router.get('/', Controller.getAllStudents);
router.get('/juniors', Controller.getAllJuniors);
router.get('/seniors', Controller.getAllSeniors);
router.get('/:id', Controller.getStudentById);

// PUT
router.put('/:id', Controller.updateStudentById);

export default router;
