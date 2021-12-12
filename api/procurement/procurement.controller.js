const { getProcurements, createProcurement } = require('./procurement.service');


module.exports = {
    addProcurement: (req, res) =>{
        const body = req.body;
        createProcurement(body, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    error: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "Procurement Added successfully",
                data: results
            })
        })

    },

    fetchProcurement : (req, res) =>{
        getProcurements((err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                status: 200,
                data: results
            });
        })
    },
}