const Todo = require("../models/Todo")
const asyncHandler = require("express-async-handler")
const {format} = require("date-fns")
const getAllTodos = asyncHandler(async (req,res)=>{
    const allTodos = await Todo.find({}).lean()
    res.json(allTodos)
})

const addTodoItem = asyncHandler(async(req,res)=>{
    const {todo,type,dueDate} = req.body
    if(type)
    {
        var newTodo = await Todo.create({
            todo,
            completed:false,
            date:format(new Date(),"dd/MM/yyyy"),
            dueDate,type
        })
    }
    else
    {
        var newTodo = await Todo.create({
            todo,
            date:format(new Date(),"dd/MM/yyyy"),
            dueDate:format(new Date(),"dd/MM/yyyy"),
            completed:false
        })
    }
    
    res.json(newTodo)
})
const deleteTodo = asyncHandler(async (req,res)=>{
    const {id} = req.body
    console.log(id)
    const foundTodo = await Todo.findById(id).exec()
    const deleteTodo = await Todo.deleteOne(foundTodo).exec()
    return res.json(deleteTodo)
})

module.exports = {getAllTodos,addTodoItem,deleteTodo}