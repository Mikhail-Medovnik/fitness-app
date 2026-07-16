import { Router } from 'express';
import { authUser, registerUser } from './auth.controller.js';

const router = Router();

router.post('/login', authUser);
router.post('/register', registerUser);

export default router;
