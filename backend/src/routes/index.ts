import { Router } from 'express';
import authRouter from './auth.route';
import studentRouter from './student.route';
import hintRouter from './hint.route';

const router = Router();

// Welcome Route
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the API!' });
});

// API Routes
router.use('/api/auth', authRouter);
router.use('/api/students', studentRouter);
router.use('/api/hints', hintRouter);

export { router };
