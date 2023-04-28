const { hashSync } = require("bcrypt");
const { genSaltSync, compareSync } = require("bcrypt");
const jwt=require("jsonwebtoken");
const secret="e2a77293f234b7950d3dedf86fa61115"
//make a hash data
function hashPassword(password){
    const salt=genSaltSync(10);
    return hashSync(password,salt)
};
//compate a ordinary data with a hash data
function comparePassword(password,hashPassword){
    return compareSync(password,hashPassword)
}
//make a jwt token
function signToken(payload){
    return jwt.sign(payload,secret)
}
//check a webtoken
function verifytoken(token){
    return jwt.verify(token,secret)
}
module.exports={
    hashPassword,
    comparePassword,
    signToken,
    verifytoken
}