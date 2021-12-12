const { getPayment, savePayment, deletePayment  } = require('./payment.service');


module.exports = {
    addPayment: (req, res) =>{
        const body = req.body;
        savePayment(body, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    error: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "Payment added successfully",
                data: results
            })
        })

    },

    fetchPayment : (req, res) =>{
        getPayment((err, results)=>{
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

    // editCustomer: (req, res) =>{
    //     const body = req.body;
    //     updateCustomer(body, (err, results) =>{
    //         if(err){
    //             console.log(err)
    //             return res.status(500).json({
    //                 error: 0,
    //                 message: "Database connection error"
    //             })
    //         }
    //         return res.status(200).json({
    //             status: 200,
    //             message: "Information Updated successfully",
    //         })
    //     })
    // },

    removePayment: (req, res) =>{
        const id = req.params.id;
        deletePayment(id, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    error: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "Payment Deleted successfully",
            })
        })
    }
}