const { productTranctions } = require('./salesreport.service');


module.exports = {
    sum(key) {
        return this.reduce((a, b) => a + (b[key] || 0), 0);
    },
    orderReport: (req, res) =>{
        const body = req.body;
        productTranctions(body.productname, (err, results) =>{
            if(err){
                console.log(err)
            }
            return res.json({
                status:200,
                data: {
                    results,
                    totalQty: results.reduce((a, b) => +a + +b.quantity, 0)

                }
            });
        });
    }

}


