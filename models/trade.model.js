import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema({
    transactionId: {
        type: String,
        required: true,
        unique: true
    },
    buyer: {
        type: String,
        required: true,
    },
    seller: {
        type: String,
        required: true,
    },
    items: [
        {
            name: String,
            quantity: Number,
        }
    ]
    ,
    status: {
        type: String,
        enum: ['Initiated', 'In Progress', 'Completed', 'Failed', 'Cancelled'],
        default: 'Initiated',
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Trade = mongoose.model("Trade", tradeSchema);