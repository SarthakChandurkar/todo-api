const express = require("express")
const router = express.Router()
const weeklyController = require("../controller/weeklyController")

router.route('/')
    .get(weeklyController.getAllWeeklyTodos)

module.exports = router