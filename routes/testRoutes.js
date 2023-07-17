const express = require("express");
const { testController } = require("../controller/testController");
// const errorMiddleware = require("../middleware/errorMiddleware");
const userAuth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/test-post", userAuth, testController);

module.exports = router;
