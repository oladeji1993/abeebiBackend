const {  customerReport } = require("./transactions.controller");
const router = require("express").Router();


router.post("/", customerReport);



module.exports = router; 
