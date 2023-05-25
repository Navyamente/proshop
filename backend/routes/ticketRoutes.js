import express, { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getTickets } from "../controllers/ticketController.js";

const router = express.Router();

router.route("/").get(getTickets);

export default router;
