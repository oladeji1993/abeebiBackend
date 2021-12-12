const pool = require("../../config/database");

module.exports = ({

    createProcurement: (data, callback) => {
        pool.query(
            `insert into procurements(
                procurementtype,
                materialquality,
                qtysupplied,   
                suppliername,
                phone,
                amount,
                nameofprocurement,
                procurementdate )
            values(?,?,?,?,?,?,?,?)`,
            [
                data.procurementtype,
                data.materialquality,
                data.qtysupplied,
                data.suppliername,
                data. phone,
                data.amount,
                data.nameofprocurement,
                data.procurementdate

            ],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

    getProcurements: callback => {
        pool.query(
            `select id, 
            procurementtype,
            materialquality,
            qtysupplied,   
            suppliername,
            phone,
            amount,
            nameofprocurement,
            procurementdate
            from procurements`,
            [],
            (error, results, fields) =>{
                if(error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },

})