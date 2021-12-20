const {  order, editOrder } = require("./paymentbyid.controller");
const router = require("express").Router();


router.post("/add",  order);
router.patch("/edit", editOrder);





module.exports = router;  