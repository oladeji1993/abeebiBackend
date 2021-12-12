const {  order, editOrder } = require("./paymentbyid.controller");
const router = require("express").Router();


router.post("/",  order);
router.patch("/", editOrder);





module.exports = router;  