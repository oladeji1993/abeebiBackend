const { getProductdetails, createPackSize, deletePackSize, updatePackSize  } = require('./packSize.service');


module.exports = {
    packSize: (req, res) =>{
        const body = req.body;
        createPackSize(body, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    error: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "Product pack Size Added successfully",
                data: results
            })
        })

    },

    getProduct : (req, res) =>{
        getProductdetails((err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                status: 200,
                data: {
                    results,
                    totalQty: results.reduce((a, b) => +a + +b.quantity, 0)
                }
            });
        })
    },

    updateProduct: (req, res) =>{
        const body = req.body;
        updatePackSize(body, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    error: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "Product Updated successfully",
            })
        })
    },

    deleteProduct: (req, res) =>{
        const id = req.params.id;
        deletePackSize(id, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    error: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                status: 200,
                message: "Product Deleted successfully",
                // data: results
            })
        })
    }
}