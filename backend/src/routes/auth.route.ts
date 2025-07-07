import { Router } from 'express';
import * as authController from '@/controllers/auth.controller';
import isAuthenticated from '@/middlewares/isAuthenticated';

const router = Router();

router.get('/login', authController.login);
router.post('/redirect', authController.callback);
router.put('/complete-registration', isAuthenticated, authController.completeRegistration);

router.get('/me', isAuthenticated, authController.getInfo);

router.post('/logout', authController.logout);

export default router;
