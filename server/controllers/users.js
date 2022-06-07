const pool = require('../database/pool')
const { v4: uuidv4 } = require('uuid')

// Authenticate user
exports.authenticate = async (req, res, next) => {
    try {

        const { email } = req.body

        // Check if user exists
        console.log(`email: ${email}`)
        let query = await pool.query(`SELECT uuid FROM users WHERE email = '${email}'`)
        if (query.rowCount == 0) {
            const uuid = uuidv4()
            console.log(`User generated UUID : ${uuid}`)

            query = await pool.query(`INSERT INTO users (uuid, email) VALUES ('${uuid}','${email}');`)
            res.json({
                uuid
            })
        } else {
            res.json({
                uuid: query.rows[0].uuid
            })
        }

    } catch (err) {
        console.log(`Failed to authenticate User : ${err}`)
        next()
    }
}