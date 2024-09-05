import express from "express";
import { createTrade, getTrade, updateTradeStatus } from "../controllers/tradeController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post('/trades', isAuthenticated ,createTrade);
router.put('/updateTradeStatus/:transactionId', isAuthenticated, updateTradeStatus);
router.get('/getTrade/:transactionId', isAuthenticated, getTrade);

export default router;