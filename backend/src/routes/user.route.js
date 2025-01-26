import { Router } from 'express';
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { getAllUsers } from "../controller/user.controller.js";


const router = Router();

router.get("/", protectRoute, getAllUsers);
// router.get("/", getAllUsers);

export default router;
