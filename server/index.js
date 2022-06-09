const app = require('./app')
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Vue3 Todolist Server listening on port ${port}`)

    console.log(JSON.stringify(process.env))
})