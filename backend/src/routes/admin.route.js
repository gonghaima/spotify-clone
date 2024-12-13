import { Router } from 'express';
import { getAdmin, createSong } from '../controller/admin.controller.js';

const router = Router();

router.post('/songs', protectRoute, requireAdmin, createSong);

export default router;
