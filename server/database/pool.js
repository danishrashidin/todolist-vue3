const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'postgresql',
    database: 'todoapp',
    password: 'postgres',
    port: 5432
})

module.exports = pool