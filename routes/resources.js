const express = require("express");
const router = express.Router();

const resourcesController = require('../controllers/resources.js')

router.get("/new-resource", resourcesController.new);


module.exports = router;