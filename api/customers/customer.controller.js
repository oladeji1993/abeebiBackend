const { getCustomer, createCustomer, deleteCustomer, updateCustomer  } = require('./customer.service');


module.exports = {
    addCustomer: (req, res) =>{
        const body = req.body;
        createCustomer(body, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    error: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "Customer Created successfully",
                data: results
            })
        })

    },

    fetchCustomer : (req, res) =>{
        getCustomer((err, results)=>{
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

    editCustomer: (req, res) =>{
        const body = req.body;
        updateCustomer(body, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    error: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "Information Updated successfully",
            })
        })
    },

    removeCustomer: (req, res) =>{
        const id = req.params.id;
        console.log(id)
        deleteCustomer(id, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    error: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "Customer Deleted successfully",
            })
        })
    },
}