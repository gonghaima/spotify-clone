import { Router } from 'express';
import {
  createAlbum,
  createSong,
  deleteSong,
  deleteAlbum,
} from '../controller/admin.controller.js';

const router = Router();

router.post('/songs', protectRoute, requireAdmin, createSong);
router.delete('/songs/:id', deleteSong);

router.post('/albums', createAlbum);
router.delete('/albums/:id', deleteAlbum);

export default router;
