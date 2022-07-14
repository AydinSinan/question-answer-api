//Routers Main File
const express = require("express");
const question = require("./question");
const auth = require("./auth");
// /api
const router = express.Router();

router.use("/questions", question);
router.use("/auth", auth);
router.use("/", (req, res) => res.send("Api Main Page"));

module.exports = router;
