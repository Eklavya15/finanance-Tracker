const { createUser, findByEmail } = require("../models/userModel");
const { signToken } = require("../utils/jwt");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await findByEmail(email);
    if (existing) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = await createUser({ name, email, password, role: "user" });
    const token = signToken({ id: user.id || user._id, role: user.role });

    res.status(201).json({
      user: {
        id: user.id || user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userDoc = await findByEmail(email);
    if (!userDoc) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const ok = await userDoc.comparePassword(password);
    if (!ok) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = signToken({ id: userDoc._id.toString(), role: userDoc.role });

    res.json({
      user: {
        id: userDoc._id.toString(),
        name: userDoc.name,
        email: userDoc.email,
        role: userDoc.role,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
};

module.exports = { register, login };
