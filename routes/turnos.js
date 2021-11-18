const express = require("express");
const router = express.Router();
const turnosController = require('../controllers/turnos.js')

router.get("/turnos/new", turnosController.new);


module.exports = router;