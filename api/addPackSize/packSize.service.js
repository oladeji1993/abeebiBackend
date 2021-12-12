const pool = require("../../config/database");

module.exports = ({

    createPackSize: (data, callback) => {
        pool.query(
            `insert into addpacksize(
                productname,
                sellingprice,   
                packsize,
                quantity,
                status,
                damages,
                date )
            values(?,?,?,?,?,?,?)`,
            [
                data.productname,
                data.sellingprice,
                data.packsize,
                data.quantity,
                data.status = "pending",
                data.damages,
                data.date



            ],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

    getProductdetails: callback => {
        pool.query(
            `select id, 
            productname,sellingprice,packsize,quantity,status,qtyleft,newqty,damages,date
            from addpacksize`,
            [],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

    updatePackSize: (data, callback) => {   
        pool.query(
            `update addpacksize set productname=?, sellingprice=?, packsize=?, quantity=?, damages=?, costofproduction=?, where id=?`,
            [
                data.productname,
                data.sellingprice,
                data.packsize,
                data.quantity,
                data.damages,
                data.id,
                data.date

            ],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

    deletePackSize: (id, callback) => {
        pool.query(
            `delete from addpacksize where id = ?`,
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