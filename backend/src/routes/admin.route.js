import { Router } from 'express';
import {
  createAlbum,
  createSong,
  checkAdmin,
  deleteSong,
  deleteAlbum,
} from '../controller/admin.controller.js';

const router = Router();

router.use(protectRoute, requireAdmin);

router.get('/check', checkAdmin);

router.post('/songs', createSong);
router.delete('/songs/:id', deleteSong);

router.post('/albums', createAlbum);
router.delete('/albums/:id', deleteAlbum);

export default router;
