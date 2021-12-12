const { orderReport} = require("./salesreport.controller");
const router = require("express").Router();


router.post("/", orderReport);




module.exports = router;        
