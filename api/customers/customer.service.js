const pool = require("../../config/database");

module.exports = ({

    createCustomer: (data, callback) => {
        pool.query(
            `insert into customers(
                firstname,
                email,
                phone,   
                state,
                lastname,
                address,
                customertype,
                companyname,
                regdate )
            values(?,?,?,?,?,?,?,?,?)`,
            [
                data.firstname,
                data.email,
                data.phone,
                data.state,
                data.lastname,
                data.address,
                data.customertype,
                data.companyname,
                data.regdate

            ],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

    getCustomer: callback => {
        pool.query(
            `select id, 
            firstname,
            email,
            phone,   
            state,
            lastname,
            address,
            customertype,
            companyname,
            regdate
            from customers`,
            [],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

    updateCustomer: (data, callback) => {
        pool.query(
            `update customers set 
            firstname=?,
            email=?,
            phone=?,   
            state=?,
            lastname=?,
            address=?,
            customertype=?,
            companyname=?,
            regdate=? 
            where id=?`,
            [
                data.firstname,
                data.email,
                data.phone,
                data.state,
                data.lastname,
                data.address,
                data.customertype,
                data.companyname,
                data.regdate,
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

    deleteCustomer: (id, callback) => {
        pool.query(
            `delete from customers where id = ?`,
            [id],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results[0])
            }
        )
    },

})