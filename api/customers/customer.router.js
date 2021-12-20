const { fetchCustomer,   addCustomer, editCustomer, removeCustomer } = require("./customer.controller");
const router = require("express").Router();


router.get("/fetch", fetchCustomer);
router.post("/add", addCustomer); 
router.patch("/patch", editCustomer);
router.delete("/delete/:id", removeCustomer);



module.exports = router; 