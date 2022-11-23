const express = require("express")
const router = express.Router()
const todosController = require("../controller/todosController")
const eachTodoController = require("../controller/eachTodoController")

router.route('/')
    .get(todosController.getAllTodos)
    .post(todosController.addTodoItem)
    .delete(todosController.deleteTodo)

router.route("/:id")
    .get(eachTodoController.fetchThatTodo)
    .delete(eachTodoController.deleteThatTodo)
module.exports = router