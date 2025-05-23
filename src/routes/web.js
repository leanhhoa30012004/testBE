const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getTestPage,
  getUser,
  getHome,
  postUpdateUser,
  postCreateUser,
} = require("../controllers/homeController");
router.get("/", getHomePage);
router.get("/user", getUser);
router.get("/doc", getTestPage);
router.get("/home", getHome);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.get("/create", (req, res) => {
  res.render("createUser.ejs");
});
router.get("/update/:id", (req, res) => {
  let id = req.params.id;
  res.render("update.ejs", { id: id });
});

module.exports = router;
