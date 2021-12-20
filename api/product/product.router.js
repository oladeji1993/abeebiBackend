const { productName, getProduct,updateProductStatus } = require("./product.controller");
const router = require("express").Router();



router.post("/add", productName);
router.get("/fetch", getProduct);
router.patch("/update", updateProductStatus);


module.exports = router; 