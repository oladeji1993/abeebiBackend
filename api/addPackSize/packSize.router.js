const { getProduct,  packSize, updateProduct, deleteProduct } = require("./packSize.controller");
const router = require("express").Router();


router.get("/get", getProduct);
router.post("/packsize", packSize); 
router.patch("/patch", updateProduct);
router.delete("/delete/:id", deleteProduct);



module.exports = router; 