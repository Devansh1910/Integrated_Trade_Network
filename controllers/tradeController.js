import { Trade } from "../models/trade.model.js";
import ErrorHandler from "../middlewares/error.js";
import { asyncHandler } from "../middlewares/aysncHandler.js";



export const createTrade = asyncHandler(async (req, res, next) => {
    const { transactionId, buyer, seller, items } = req.body;

    
    if (!transactionId || !buyer || !seller || !items || !Array.isArray(items) || items.length === 0) {
        return next(
            new ErrorHandler(
                "Transaction ID, buyer, seller, and at least one item are required",
                400
            )
        );
    }

    
    const existingTransactionId = await Trade.findOne({ transactionId });
    if (existingTransactionId) {
        return next(
            new ErrorHandler(
                "Transaction ID already exists!",
                400
            )
        );
    }

    
    const trade = await Trade.create({
        transactionId,
        buyer,
        seller,
        items
    });

    res.status(201).json({
        success: true,
        message: "Trade transaction created successfully",
        trade
    });
});

export const updateTradeStatus = asyncHandler(async (req, res, next) => {
    const { transactionId } = req.params;
    const { status } = req.body;

    const validStatuses = ['Initiated', 'In Progress', 'Completed', 'Failed', 'Cancelled'];

    if (!validStatuses.includes(status)) {
        return next(new ErrorHandler("Invalid Trade Status!", 400))
    }

    try {
        let trade = await Trade.findOne({ transactionId });

        if (!trade) {
            return next(new ErrorHandler("Trade not found", 400))
        }

        trade.status = status;
        await trade.save();

        res.status(200).json({ success: true, message: 'Trade status updated', trade });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

export const getTrade = asyncHandler(async (req, res, next) => {
    const { transactionId } = req.params;
    let trade = await Trade.findOne({ transactionId });

    if (!trade) {
        return next(new ErrorHandler("Trade not found", 400))
    }
    res.status(200).json({ success: true, message: 'Trade fetched successfully', trade });
})
