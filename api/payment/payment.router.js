const { fetchPayment,   addPayment, removePayment } = require("./payment.controller");
const router = require("express").Router();


router.get("/", fetchPayment);
router.post("/", addPayment); 
// router.patch("/", editCustomer);
router.delete("/:id", removePayment);



module.exports = router; 