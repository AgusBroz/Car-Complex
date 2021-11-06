const express = require("express");
const router = express.Router();
//const { isAuthenticated } = require("../helpers/auth");
const usersControler = require('../controllers/users')

router.get("/signup", usersControler.signupForm);
router.get("/login", usersControler.loginForm);
// router.get("/play", isAuthenticated, indexControler.play);


module.exports = router;