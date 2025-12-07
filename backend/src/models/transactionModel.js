const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ["income", "expense"], required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    note: { type: String },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

const createTransaction = (userId, payload) =>
  Transaction.create({ ...payload, user: userId });

const getUserTransactions = (userId, page = 1, limit = 20) =>
  Transaction.find({ user: userId })
    .sort({ date: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .lean()
    .exec();

module.exports = { Transaction, createTransaction, getUserTransactions };
