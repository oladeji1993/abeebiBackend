const { createUser, getRole, login } = require("./user.controller");
const { checkToken } = require("../auth/token_validation");
const router = require("express").Router();



router.post("/add", createUser);
router.get("/fetchrole", getRole);
router.post("/login", login);



module.exports = router;        