const Pool = require('pg').Pool
const pool = new Pool({
    // user: process.env.POSTGRES_USER,
    // host: process.env.POSTGRES_HOST,
    // database: process.env.POSTGRES_DB,
    // password: process.env.POSTGRES_PASSWORD,
    connectionString: process.env.DATABASE_URL,
    // port: 5432,
    ssl: { rejectUnauthorized: false }
})

module.exports = pool