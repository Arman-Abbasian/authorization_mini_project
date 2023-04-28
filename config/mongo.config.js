const { default: mongoose, mongo } = require("mongoose");

const DB_URI="mongodb://localhost:27017/authorization_mini_project";
mongoose.set("strictQuery",true);
mongoose.connect(DB_URI)
.then(()=>{console.log("mongoose connected to mongodb successfully")})
.catch((err)=>console.log("err.message"))