const {  customerReport } = require("./transactions.controller");
const router = require("express").Router();


router.post("/add", customerReport);



module.exports = router; 
