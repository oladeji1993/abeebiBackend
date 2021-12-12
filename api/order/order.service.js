const pool = require("../../config/database");

module.exports = ({
    createOrder: (data, callback) => {
        let values=data.reduce((o,a)=>{
            let ini=[];
            ini.push(a.productname);
            ini.push(a.orderdate);
            ini.push(a.productprice);
            ini.push(a.amountpaid);
            ini.push(a.quantity);
            ini.push(a.customername);
            ini.push(a.packsize);
            ini.push(a.tobalance);
            o.push(ini);
            return o
        },[])
        
        var sql = "INSERT INTO orders ( productname, orderdate, productprice, amountpaid, quantity, customername, packsize, tobalance) VALUES ?";
        pool.query(sql, [values], function (error, results) { 
            if(error){
                return callback(error)
            }else{
                return callback(null, results)
            }
        });
    },

    getOrder: callback => {
        pool.query(
            `select id, 
            productname, 
            orderdate, 
            productprice,
            amountpaid, 
            quantity, 
            customername,
            packsize,
            tobalance 
            from orders`,
            [],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

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
                data.id
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