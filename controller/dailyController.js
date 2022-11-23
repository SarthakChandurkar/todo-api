const Todo = require("../models/Todo")
const asyncHandler = require("express-async-handler")

const getAllDailyTodos =  asyncHandler(async(req,res)=>{
    const {date} = req.body
    const getAllDailyTodos = await Todo.find({date,type:"daily"}).lean()
    res.json(getAllDailyTodos)
})

module.exports = {getAllDailyTodos}