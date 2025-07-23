import { Router } from 'express';
import * as Controller from '@/controllers';
import isAuthenticated from '@/middlewares/isAuthenticated';

const router = Router();

// POST

// GET
router.get('/', Controller.getAllStudents);
router.get('/juniors', Controller.getAllJuniors);
router.get('/seniors', Controller.getAllSeniors);
router.get('/:id', Controller.getStudentById);
router.get('/:id/isCorrect', Controller.guessCorrect);

// PUT
router.put('/:id/guess', Controller.guessMentor);
router.put('/:id', isAuthenticated, Controller.updateStudentById);

export default router;
