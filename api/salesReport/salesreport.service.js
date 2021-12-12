const pool = require("../../config/database");

module.exports = ({

productTranctions: (productname, callback) =>{
    pool.query(
        `select * from orders where productname = ?`,
        [productname],
        (error, results, fields) =>{
            if(error) {
                callback(error)
            }
            return callback(null, results)
        }
    )
}
})