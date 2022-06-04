const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todos')

router.post('/create', todoController.addTodo)
router.get('/:userID', todoController.getTodosForUser)
router.patch('/edit/:todoID', todoController.editTodo)
router.delete('/delete/:todoID', todoController.deleteTodo)

module.exports = router