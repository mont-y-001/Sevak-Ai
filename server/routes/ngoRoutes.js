const express = require("express");
const router = express.Router();

const { registerNGO } = require("../controllers/ngoController");

router.post("/register", registerNGO);

module.exports = router;