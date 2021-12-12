const { fetchProcurement,   addProcurement } = require("./procurement.controller");
const router = require("express").Router();


router.get("/", fetchProcurement);
router.post("/", addProcurement); 




module.exports = router;