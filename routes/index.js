const express = require("express");
const router = express.Router();
//const { isAuthenticated } = require("../helpers/auth");
const indexControler = require('../controllers/index')

router.get("/", indexControler.landingPage);
router.get("/nosotros", indexControler.sobreNosotros);
// router.get("/play", isAuthenticated, indexControler.play);


module.exports = router;
