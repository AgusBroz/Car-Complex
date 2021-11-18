const express = require("express");
const router = express.Router();
const indexControler = require('../controllers/index')

router.get("/", indexControler.landingPage);
router.get("/nosotros", indexControler.sobreNosotros);


module.exports = router;
