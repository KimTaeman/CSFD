import { Router } from 'express';
import * as Controller from '@/controllers';

const router = Router();

// POST

// GET

// PUT
router.put('/', Controller.updateHint);

export default router;
