import { Router } from 'express';
import authRouter from './auth.route';
import studentRouter from './student.route';
import hintRouter from './hint.route';

const router = Router();

// Welcome Route
router.get('/', async (req, res) => {
  res.status(200).json({ message: 'Welcome the API!' });
});

// API Routes
router.use('/auth', authRouter);
router.use('/students', studentRouter);
router.use('/hints', hintRouter);

export { router };
