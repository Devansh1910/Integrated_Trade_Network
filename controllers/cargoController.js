import { Cargo } from "../models/cargo.model.js";
import ErrorHandler from "../middlewares/error.js";
import { asyncHandler } from "../middlewares/aysncHandler.js";

export const createCargo = asyncHandler(async (req, res, next) => {
    const { shipmentId, origin, destination, items } = req.body;

    if (!shipmentId || !origin || !destination || !items || !Array.isArray(items) || items.length === 0) {
        return next(new ErrorHandler("all fields are required and atleast one item is required", 400))
    }

    const existingShipmentId = await Cargo.findOne({ shipmentId });
    if (existingShipmentId) {
        return next(
            new ErrorHandler(
                "Shipment ID already exists!",
                400
            )
        );
    }

    const cargo = await Cargo.create({
        shipmentId,
        origin,
        destination,
        items,
    })

    res.status(201).json({
        success: true,
        message: "cargo created successfully",
        cargo
    });
})

export const updateCargoStatus = asyncHandler(async (req, res, next) => {
    const { shipmentId } = req.params;
    const { status } = req.body;

    const validStatuses = ['Pending', 'In Transit', 'Delivered', 'Delayed', 'Cancelled'];

    if (!validStatuses.includes(status)) {
        return next(new ErrorHandler("Invalid Cargo Status!", 400))
    }

    try {
        let cargo = await Cargo.findOne({ shipmentId });

        if (!cargo) {
            return next(new ErrorHandler("Cargo not found", 400))
        }

        cargo.status = status;
        await cargo.save();

        res.status(200).json({ success: true, message: 'cargo status updated', cargo });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

export const getCargo = asyncHandler(async (req, res, next) => {
    const { shipmentId } = req.params;
    let cargo = await Cargo.findOne({ shipmentId });

    if (!cargo) {
        return next(new ErrorHandler("cargo not found", 400))
    }
    res.status(200).json({ success: true, message: 'cargo fetched successfully', cargo });
})