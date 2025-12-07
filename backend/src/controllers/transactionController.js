const {
  createTransaction,
  getUserTransactions,
} = require("../models/transactionModel");

// POST /api/transactions
const create = async (req, res) => {
  try {
    if (req.user.role === "read-only") {
      return res
        .status(403)
        .json({ message: "Read-only users cannot modify data" });
    }

    const tx = await createTransaction(req.user.id, req.body);

    // Redis cache invalidation removed (no redis.del here)

    res.status(201).json(tx);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not create transaction" });
  }
};

// GET /api/transactions
const list = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const items = await getUserTransactions(req.user.id, page, limit);
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not fetch transactions" });
  }
};

module.exports = { create, list };
