const { Router } = require("express");
const { register, login } = require("../controllers/auth.controller");

const router=Router();
router.post("/login",login);
router.post("/register",register)
module.exports={
    AuthRoutes:router
}