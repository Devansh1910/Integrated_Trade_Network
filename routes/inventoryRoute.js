import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addItemsToInventory, createInventory, getInventory, updateItemsInInventory } from "../controllers/inventoryController.js";


const router = express.Router();

router.post('/inventory', isAuthenticated, createInventory);
router.get('/inventory/:stationId', isAuthenticated, getInventory)
router.post('/inventory/:stationId/additems', isAuthenticated, addItemsToInventory)
router.put('/inventory/:stationId/updateitems', isAuthenticated, updateItemsInInventory)
export default router;