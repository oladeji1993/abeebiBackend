const { orderById, updateOrder } = require('./paymentbyid.service');


module.exports = {
    order: (req, res) =>{
        const body = req.body;
        orderById(body.id, (err, results) =>{
            if(err){
                console.log(err)
            }
            return res.json({
                status:200,
                data: results
            });
        });
    },

    editOrder: (req, res) =>{
        const body = req.body;
        updateOrder(body, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    error: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                status: 200,
                data: results,
                message: "Payment Updated successfully",
            })
        })
    },

}

