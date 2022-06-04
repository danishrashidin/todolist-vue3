const pool = require('../database/pool')
const { v4: uuidv4 } = require('uuid')

// Statuses : True, False

// Add todo {title}
exports.addTodo = async (req, res, next) => {

    try {
        const { userID, title } = req.body
        const uuid = uuidv4()

        const query = await pool.query(`INSERT INTO todos (uuid, title, status, user_uuid) VALUES ('${uuid}','${title}', false,'${userID}')`)
        res.json(query.rowCount == 1 ? `'${title}' added` : "No new todo added")

    } catch (err) {
        console.log(`Failed to add a Todo : ${err}`)
        next()
    }

}

// Get todo :userID
exports.getTodosForUser = async (req, res, next) => {

    try {
        const { userID } = req.params

        const query = await pool.query(`SELECT * FROM todos WHERE user_uuid = '${userID}'`)
        res.json(query.rows)

    } catch (err) {
        console.log(`Failed to get Todos for user ${userID} : ${err}`)
        next()
    }

}

// Modify todo by :todoID {title, status}
exports.editTodo = async (req, res, next) => {

    try {
        const { todoID } = req.params
        const { title, status } = req.body

        const query = await pool.query(`UPDATE todos SET title = '${title}', status = ${status} WHERE uuid = '${todoID}'`)
        res.json(query.rowCount)

    } catch (err) {
        console.log(`Failed to edit Todo ${todoID} : ${err}`)
        next()
    }

}

// Delete todo by :todoID
exports.deleteTodo = async (req, res, next) => {

    try {
        const { todoID } = req.params

        const query = await pool.query(`DELETE FROM todos WHERE uuid = '${todoID}'`)
        res.json(query.rowCount)

    } catch (err) {
        console.log(`Failed to delete Todo ${todoID} : ${err}`)
        next()
    }

}