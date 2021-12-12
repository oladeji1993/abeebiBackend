const { productName, getProduct,updateProductStatus } = require("./product.controller");
const router = require("express").Router();



router.post("/", productName);
router.get("/", getProduct);
router.patch("/", updateProductStatus)


module.exports = router; 