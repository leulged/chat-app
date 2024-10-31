import express from "express";
import { getUserForSideBar } from "../controllers/userControllers.js";
import protectRoute from "../middleware.js/protectRoutes.js";
const router = express.Router();

router.get("/", protectRoute, getUserForSideBar)
export default router