const { Router } = require("express");
const { AuthRoutes } = require("./auth.routes");
const { checkAuth } = require("../middlewares/check-auth");
const { UserRoutes } = require("./profile.routes");

const router=Router();
router.use("/auth",AuthRoutes);
router.use("/user",checkAuth,UserRoutes)
module.exports={
    AllRoutes:router
}