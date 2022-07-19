const express = require("express");
// api/auth
const router = express.Router();
const { register, errorTest } = require("../controllers/auth");

router.post("/register", register);
router.get("/error", errorTest)

module.exports = router;
