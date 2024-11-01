import express from "express";
 import { getMessages, sendMessage } from "../controllers/messageControllers.js";
import protectRoute from "../middleware.js/protectRoutes.js";
const router = express.Router();
router.get("/:id",protectRoute , getMessages);

router.post("/send/:id",protectRoute ,sendMessage);

export default router;