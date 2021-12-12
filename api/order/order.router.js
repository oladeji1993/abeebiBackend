const { fetchOrder,   addOrder, order, editOrder } = require("./order.controller");
const router = require("express").Router();


router.get("/", fetchOrder);
router.post("/", addOrder); 
router.post("/", order); 
router.patch("/", editOrder);
// router.delete("/:id", removePayment);



module.exports = router; 