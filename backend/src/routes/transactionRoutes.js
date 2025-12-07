const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { transactionLimiter } = require("../middleware/rateLimit");
const { create, list } = require("../controllers/transactionController");

router.use(auth, transactionLimiter);

router.get("/", list);
router.post("/", create);

module.exports = router;
