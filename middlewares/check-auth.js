const { userModel } = require("../models/user.model");
const { verifytoken } = require("../utils/auth.utils");

async function checkAuth(req,res,next){
try {
    const authorization=req?.headers?.authorization;
    const [bearer,token]=authorization?.split(" ");
    if(bearer && bearer.toLowerCase()==="bearer"){
        if(token){
            const verifyResult=verifytoken(token);
            console.log(verifyResult)
            const user=await userModel.findOne({email:verifyResult.email})
            req.isAuthenticated=!!user;
            if(!user) throw {status:401,message:"not found user"}
            req.user={fullName:user.fullName,email:user.email};
            return next()
        }
        throw {status:401,message:"authorization failed"}
    }
    throw {status:401,message:"authorization failed"}
    
} catch (error) {
    next(error)
}
}
module.exports={
    checkAuth
}