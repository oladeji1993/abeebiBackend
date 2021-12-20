const { orderReport} = require("./salesreport.controller");
const router = require("express").Router();


router.post("/add", orderReport);




module.exports = router;        
