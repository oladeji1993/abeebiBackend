const { customerTranctions  } = require('./transactions.service');

module.exports = {
    customerReport: (req, res) =>{
        const body = req.body;
        customerTranctions(body.customername, (err, results) =>{
            if(err){
                console.log(err)
            }
            return res.json({
                status:200,
                data: {
                    results,
                    totalpayment: results.reduce((a, b) => +a + +b.amountpaid, 0)
                }
            });
        });
    }
}