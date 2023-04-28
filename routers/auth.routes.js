const { Router } = require("express");

const router=Router();
router.post("/login",login);
router.post("/register",register)
module.exports={
    AuthRoutes:router
}