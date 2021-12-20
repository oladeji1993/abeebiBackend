const { fetchPayment,   addPayment, removePayment } = require("./payment.controller");
const router = require("express").Router();


router.get("/fetch", fetchPayment);
router.post("/add", addPayment); 
// router.patch("/", editCustomer);
router.delete("/delete/:id", removePayment);



module.exports = router; 