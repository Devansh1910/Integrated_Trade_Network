import { Inventory } from "../models/inventory.model.js";
import ErrorHandler from "../middlewares/error.js";
import { asyncHandler } from "../middlewares/aysncHandler.js";


export const createInventory = asyncHandler(async (req, res, next) => {
    const { stationId, items } = req.body;
    if (!stationId || !items || !Array.isArray(items) || items.length === 0) {
        return next(new ErrorHandler("station ID and at least one item are required", 400));
    }

    const existingStationId = await Inventory.findOne({ stationId });
    if (existingStationId) {
        return next(new ErrorHandler("Station ID already exists!", 400));
    }

    const inventory = await Inventory.create({
        stationId,
        items
    });

    res.status(201).json({
        success: true,
        message: "Inventory created successfully",
        inventory
    });
});


export const getInventory = asyncHandler(async (req, res, next) => {
    const { stationId } = req.params;
    let inventory = await Inventory.findOne({ stationId });

    if (!inventory) {
        return next(new ErrorHandler("Inventory not found", 400));
    }

    res.status(200).json({
        success: true,
        message: 'Inventory fetched successfully',
        inventory
    });
});


export const addItemsToInventory = asyncHandler(async (req, res, next) => {
    const { stationId } = req.params;
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
        return next(new ErrorHandler("At least one item is required", 400));
    }

    const inventory = await Inventory.findOne({ stationId });

    if (!inventory) {
        return next(new ErrorHandler("Inventory not found", 404));
    }

    // Merge existing items with new items
    items.forEach(newItem => {
        const existingItemIndex = inventory.items.findIndex(item => item.name === newItem.name);
        if (existingItemIndex !== -1) {
            // Update the quantity of the existing item
            inventory.items[existingItemIndex].quantity += newItem.quantity;
        } else {
            // Add the new item
            inventory.items.push(newItem);
        }
    });

    await inventory.save();

    res.status(200).json({
        success: true,
        message: 'Items added/updated successfully',
        inventory
    });
});


export const updateItemsInInventory = asyncHandler(async (req, res, next) => {
    const { stationId } = req.params;
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
        return next(new ErrorHandler("At least one item is required", 400));
    }

    const inventory = await Inventory.findOne({ stationId });

    if (!inventory) {
        return next(new ErrorHandler("Inventory not found", 404));
    }

    // Replace the existing items with the new items
    inventory.items = items;

    await inventory.save();

    res.status(200).json({
        success: true,
        message: 'Inventory items updated successfully',
        inventory
    });
});
