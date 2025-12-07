const mongoose = require("mongoose");
const { Transaction } = require("../models/transactionModel");

// GET /api/analytics
const monthlyAnalytics = async (req, res) => {
  const userId = req.user.id;

  try {
    const data = await Transaction.aggregate([
      { $match: { user: new mongoose.Types.ObjectId(userId) } },
      {
        $group: {
          _id: {
            year: { $year: "$date" },
            month: { $month: "$date" },
          },
          income: {
            $sum: { $cond: [{ $eq: ["$type", "income"] }, "$amount", 0] },
          },
          expense: {
            $sum: { $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0] },
          },
        },
      },
      {
        $project: {
          _id: 0,
          month: {
            $dateFromParts: {
              year: "$_id.year",
              month: "$_id.month",
              day: 1,
            },
          },
          income: 1,
          expense: 1,
        },
      },
      { $sort: { month: 1 } },
    ]);

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not fetch analytics" });
  }
};

// GET /api/analytics/categories
const categoryAnalytics = async (req, res) => {
  const userId = req.user.id;

  try {
    const data = await Transaction.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(userId),
          type: "expense",
        },
      },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          total: 1,
        },
      },
      { $sort: { total: -1 } },
    ]);

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not fetch category analytics" });
  }
};

module.exports = { monthlyAnalytics, categoryAnalytics };
