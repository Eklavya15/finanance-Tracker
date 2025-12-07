const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "user", "read-only"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = function (plain) {
  return bcrypt.compare(plain, this.password);
};

const User = mongoose.model("User", userSchema);

const createUser = async ({ name, email, password, role = "user" }) => {
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, role });
  const { password: _, ...plain } = user.toObject();
  return plain;
};

const findByEmail = (email) => User.findOne({ email }).exec();

const getAllUsers = () => User.find({}, { password: 0 }).lean().exec();

module.exports = { User, createUser, findByEmail, getAllUsers };
