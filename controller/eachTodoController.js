const Todo = require("../models/Todo")
const asyncHandler = require("express-async-handler")

const fetchThatTodo = asyncHandler(async(req,res)=>{
    const id =  req.params.id
    const thatTodo = await Todo.findById(id).exec()
    if(!thatTodo) return res.json("Not found")
    res.json(thatTodo)
})

const deleteThatTodo = asyncHandler(async(req,res)=>{
    const id= req.params.id
    const deleteTodo = await Todo.findByIdAndDelete(id).exec()
    res.json(deleteTodo)
})


module.exports = {fetchThatTodo,deleteThatTodo}
