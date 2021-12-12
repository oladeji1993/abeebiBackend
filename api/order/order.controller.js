const { getOrder, createOrder, orderById, updateOrder,orderByName } = require('./order.service');


module.exports = {
    addOrder: (req, res) =>{
        const body = req.body;
        createOrder(body, (err, results) =>{
            if(results){
                return res.status(200).json({
                    status: 200,
                    message: "Order added successfully",
                    data: results
                })
            }else{
                console.log(err)
            }
        })

    },

    fetchOrder : (req, res) =>{
        getOrder((err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                status: 200,
                data: {
                    results,
                    totalQty: results.reduce((a, b) => +a + +b.quantity, 0),
                    totalSales: results.reduce((a, b) => +a + +b.amountpaid, 0)
                }
            });
        })
    },

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
                message: "Record Updated successfully",
            })
        })
    },

}