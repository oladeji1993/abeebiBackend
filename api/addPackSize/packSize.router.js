const { getProduct,  packSize, updateProduct, deleteProduct } = require("./packSize.controller");
const router = require("express").Router();


router.get("/", getProduct);
router.post("/", packSize); 
router.patch("/", updateProduct);
router.delete("/:id", deleteProduct);



module.exports = router; 