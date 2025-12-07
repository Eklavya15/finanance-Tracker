const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { requireRole } = require("../middleware/roleMiddleware");
const { listUsers } = require("../controllers/userController");

router.get("/", auth, requireRole("admin"), listUsers);

module.exports = router;
