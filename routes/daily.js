const express = require("express")
const router = express.Router()
const dailyController = require("../controller/dailyController")

router.route('/')
    .get(dailyController.getAllDailyTodos)

module.exports = router