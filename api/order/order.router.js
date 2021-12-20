const { fetchOrder,   addOrder, order, editOrder } = require("./order.controller");
const router = require("express").Router();


router.get("/fetch", fetchOrder);
router.post("/add", addOrder); 
router.post("/addID", order); 
router.patch("/editOrder", editOrder);
// router.delete("/:id", removePayment);



module.exports = router; 