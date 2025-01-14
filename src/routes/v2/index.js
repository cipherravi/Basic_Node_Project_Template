const express = require("express");
const router = express.Router();
const { aboutController } = require("../../controllers");

router.get("/about", aboutController);

module.exports = router;
