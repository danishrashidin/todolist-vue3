const pool = require('../database/pool')
const { v4: uuidv4 } = require('uuid')

// Add user
exports.addUser = async (req, res, next) => {
    try {
        const uuid = uuidv4()
        console.log(`User generated UUID : ${uuid}`)

        const query = await pool.query(`INSERT INTO users VALUES ('${uuid}');`)

        res.json(query)
    } catch (err) {
        console.log(`Failed to add create User : ${err}`)
        next()
    }
}