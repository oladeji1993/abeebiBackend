const { fetchProcurement,   addProcurement } = require("./procurement.controller");
const router = require("express").Router();


router.get("/fetch", fetchProcurement);
router.post("/add", addProcurement); 




module.exports = router;