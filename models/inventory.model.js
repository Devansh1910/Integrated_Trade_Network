import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    stationId: {
        type: String,
        required: true,
        unique: true
    },
    items: [
        {
            name: String,
            quantity: Number
        }
    ],
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

inventorySchema.pre('save', function (next) {
    if (this.isModified('items')) {
        this.lastUpdated = Date.now();
    }
    next();
});

export const Inventory = mongoose.model("Inventory", inventorySchema);
