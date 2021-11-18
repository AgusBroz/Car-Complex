const express = require("express");
const router = express.Router();
const usersControler = require('../controllers/users')

router.get("/signup", usersControler.signupForm);
router.get("/login", usersControler.loginForm);
router.get("/perfil", usersControler.profile)
router.get("/recover", usersControler.recoverPassword)
router.get("/cargarAuto", usersControler.postCar)


module.exports = router;
