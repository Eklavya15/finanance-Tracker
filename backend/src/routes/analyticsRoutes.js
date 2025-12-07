const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { analyticsLimiter } = require("../middleware/rateLimit");
const {
  monthlyAnalytics,
  categoryAnalytics,
} = require("../controllers/analyticsController");

router.get("/", auth, analyticsLimiter, monthlyAnalytics);
router.get("/categories", auth, analyticsLimiter, categoryAnalytics);

module.exports = router;
