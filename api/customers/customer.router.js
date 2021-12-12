const { fetchCustomer,   addCustomer, editCustomer, removeCustomer } = require("./customer.controller");
const router = require("express").Router();


router.get("/", fetchCustomer);
router.post("/", addCustomer); 
router.patch("/", editCustomer);
router.delete("/:id", removeCustomer);



module.exports = router; 