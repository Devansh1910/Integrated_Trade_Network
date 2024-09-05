import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { createCargo, getCargo, updateCargoStatus } from "../controllers/cargoController.js";

const router = express.Router();

router.post("/cargo", isAuthenticated, createCargo);
router.put("/updateCargoStatus/:shipmentId", isAuthenticated, updateCargoStatus);
router.get("/getCargo/:shipmentId", isAuthenticated, getCargo)
export default router;