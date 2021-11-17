const express = require("express");
const router = express.Router();
//const { isAuthenticated } = require("../helpers/auth");
const usersControler = require('../controllers/users')

router.get("/signup", usersControler.signupForm);
router.get("/login", usersControler.loginForm);
router.get("/perfil", usersControler.profile)
router.get("/recover", usersControler.recoverPassword)
// router.get("/play", isAuthenticated, indexControler.play);


module.exports = router;
