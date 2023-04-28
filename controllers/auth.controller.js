const {userModel} = require("../models/user.model");
const { hashPassword, comparePassword, signToken } = require("../utils/auth.utils");

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
async function login(req,res,next){
    try {
        const {email,password}=req.body;
        const user=await userModel.findOne({email});
        if(!user) throw {staus:401,message:"use not found"}
        console.log(user)
        if(comparePassword(password,user.password)){
            const token=signToken({id:user._id,email:user.email})
            res.send({token,message:"token"})
        }else{
            throw {status:400,message:"email or password is incorrect"}
        }
    } catch (error) {
        next(error)
    }
}
module.exports={
    register,
    login
}