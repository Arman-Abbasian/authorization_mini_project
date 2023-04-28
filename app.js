const express=require("express");
const { ErrorHandler, NotFoundError } = require("./utils/errorHandler");
const app=express();
require("./config/mongo.config");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(NotFoundError);
app.use(ErrorHandler);
app.listen(3000,()=>{
    console.log("server connected to port 3000")
})