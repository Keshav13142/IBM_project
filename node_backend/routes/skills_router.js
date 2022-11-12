const router = require("express").Router();
const auth = require("../middlewares/auth_middleware");
const {
  getUserSkills,
  postUserSkils,
  deleteUserSkills,
} = require("../controllers/skills_controller");

router
  .route("/")
  .get(auth, getUserSkills)
  .post(auth, postUserSkils)
  .delete(auth, deleteUserSkills);

module.exports = router;
