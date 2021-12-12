const { create, getProduct, updateStatus } = require('./product.service');


module.exports = {
    productName: (req, res) =>{
        const body = req.body;
        create(body, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    error: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "Product Name Added successful",
                data: results
            })
        })

    },

    getProduct : (req, res) =>{
        getProduct((err, results)=>{
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

    updateProductStatus: (req, res) =>{
        const body = req.body;
        updateStatus(body, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    error: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "Stock Verified successfully",
            })
        })
    },
}