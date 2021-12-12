const pool = require("../../config/database");

module.exports = ({
    orderById: (id, callback) =>{
        pool.query(
            `select * from orders where id = ?`,
            [id],
            (error, results, fields) =>{
                if(error) {
                    callback(error)
                }
                return callback(null, results)
            }
        )
    },

    updateOrder: (data, callback) => {
        pool.query(
            `update orders set 
            productname=?,
            orderdate=?,
            productprice=?,
            amountpaid=?,  
            quantity=?, 
            customername=?,
            packsize=?,
            tobalance=?
            where id=?`,
            [
                data.productname,
                data.orderdate,
                data.productprice,
                data.amountpaid,
                data.quantity,
                data.customername,
                data.packsize,
                data.tobalance,
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