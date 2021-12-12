const pool = require("../../config/database");

module.exports = ({

    savePayment: (data, callback) => {
        pool.query(
            `insert into payment(
                customername,
                paymenttype,
                datereceived,
                amount  
                )
            values(?,?,?,?)`,
            [
                data.customername,
                data.paymenttype,
                data.datereceived,
                data.amount

            ],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

    getPayment: callback => {
        pool.query(
            `select id, 
            customername,
            paymenttype,
            datereceived,
            amount  
            from payment`,
            [],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

    // updateCustomer: (data, callback) => {
    //     pool.query(
    //         `update customers set 
    //         firstname=?,
    //         email=?,
    //         phone=?,   
    //         state=?,
    //         lastname=?,
    //         address=?,
    //         customertype=?,
    //         totalamount=?,
    //         totalpaid=? 
    //         where id=?`,
    //         [
    //             data.firstname,
    //             data.email,
    //             data.phone,
    //             data.state,
    //             data.lastname,
    //             data.address,
    //             data.customertype,
    //             data.totalamount,
    //             data.totalpaid,
    //             data.id
    //         ],
    //         (error, results, fields) =>{
    //             if(error){
    //                 return callback(error)
    //             }
    //             return callback(null, results)
    //         }
    //     )
    // },

    deletePayment: (id, callback) => {
        pool.query(
            `delete from payment where id = ?`,
            [id],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results[0])
            }
        )
    }


    
})