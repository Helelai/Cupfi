const Router = require("express");
const router = new Router();
const ReviewController = require("../controller/review.controller");

router.get("/all-reviews", ReviewController.getAllReviews);
router.get("/reviews", ReviewController.getReviews);
router.post("/reviews", ReviewController.createReview);
router.put("/review/:id", ReviewController.updateReview);

module.exports = router;