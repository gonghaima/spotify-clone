import { Router } from 'express';
import { createSong, deleteSong } from '../controller/admin.controller.js';

const router = Router();

router.post('/songs', protectRoute, requireAdmin, createSong);
router.delete("/songs/:id", deleteSong);

export default router;
