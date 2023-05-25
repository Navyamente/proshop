import express, { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getUserData } from "../controllers/testController.js";

const router = express.Router();

router.route("/user").get(getUserData);
export default router;
