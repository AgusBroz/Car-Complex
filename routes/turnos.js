const express = require("express");
const router = express.Router();
//const { isAuthenticated } = require("../helpers/auth");
const turnosController = require('../controllers/turnos.js')

router.get("/turnos/new", turnosController.new);
// router.get("/play", isAuthenticated, indexControler.play);


module.exports = router;