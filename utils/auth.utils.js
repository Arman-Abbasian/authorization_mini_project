const { genSaltSync, compareSync } = require("bcrypt");

function hashPassword(password){
    const salt=genSaltSync(10);
    return hashPassword(password,salt)
};
function comparePassword(password,hashPassword){
    return compareSync(password,hashPassword)
}
module.exports={
    hashPassword,
    comparePassword
}