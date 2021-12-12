const pool = require("../../config/database");

module.exports = ({
    create: (data, callback) => {
        pool.query(
            `insert into products(
                productname )
            values(?)`,
            [
                data.productname
            ],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },


    getProduct: callback => {
        pool.query(
            `select id, productname from products`,
            [],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

    updateStatus: (data, callback) => {
        pool.query(
            `update addpacksize set status=? Where id=?`,
            [
                data.status = "verified",
                data.id,
            ],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

})