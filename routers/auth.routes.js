const { Router } = require("express");
const { register } = require("../controllers/auth.controller");

const router=Router();
//router.post("/login",logi);
router.post("/register",register)
module.exports={
    AuthRoutes:router
}