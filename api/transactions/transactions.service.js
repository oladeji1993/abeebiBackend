const pool = require("../../config/database");


module.exports = ({
    customerTranctions: (customername, callback) =>{
        pool.query(
            `select * from orders where customername = ?`,
            [customername],
            (error, results, fields) =>{
                console.log(results)
                if(error) {
                    callback(error)
                }
                return callback(null, results)
            }
        )
    }

})
