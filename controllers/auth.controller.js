const {userModel} = require("../models/user.model");
const { hashPassword } = require("../utils/auth.utils");

async function register(req,res,next){
    try {
        const {fullName,email,password}=req.body;
       await userModel.create({
            fullName:fullName,email:email,password:hashPassword(password)
        });
        res.status(201).json({
            statusCode:res.statusCode,
            data:{
                message:"data created successfully"
            }
        })
    } catch (error) {
        next (error)
    }
}
module.exports={
    register
}