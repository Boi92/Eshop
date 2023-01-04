const express = require("express");
const router = express.Router();
const userControllers = require('./controller/userControllers');

router.post("/register",userControllers.register);

router.post("/register");
router.post("./login");


module.exports = router;