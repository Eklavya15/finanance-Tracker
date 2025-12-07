const { getAllUsers } = require("../models/userModel");

const listUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not fetch users" });
  }
};

module.exports = { listUsers };
