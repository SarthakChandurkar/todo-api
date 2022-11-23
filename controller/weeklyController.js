const Todo = require("../models/Todo")
const asyncHandler = require("express-async-handler")

const getAllWeeklyTodos =  asyncHandler(async(req,res)=>{
    const {date} = req.body
    const getAllWeeklyTodos = await Todo.find({date,type:"weekly"}).lean()
    res.json(getAllWeeklyTodos)
})

module.exports = {getAllWeeklyTodos}