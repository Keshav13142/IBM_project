const router = require("express").Router();
const auth = require("../middlewares/auth_middleware");
const {
  deleteFromUserProfile,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/user_controller");

router
  .route("/")
  .get(auth, getUserProfile)
  .put(auth, updateUserProfile)
  .delete(auth, deleteFromUserProfile);

// router.post('/');

module.exports = router;
