const pool = require("../../config/database");

module.exports = ({
    create: (data, callback) => {
        pool.query(
            `insert into users(
                firstname, 
                lastname, 
                role_id,
                email, 
                phonenumber, 
                password)
            values(?,?,?,?,?,?)`,
            [
                data.firstname,
                data.lastname,
                data.role_id,
                data.email,
                data.phonenumber,
                data.password
            ],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

    getRole: callback => {
        pool.query(
            `select id, role from role`,
            [],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

    getUserByEmail: (email, callback) =>{
        pool.query(
            `select * from users where email = ?`,
            [email],
            (error, results, fields) =>{
                if(error) {
                    callback(error)
                }
                return callback(null, results[0])
            }
        )
    }
})