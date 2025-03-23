let mongoose=require("mongoose");
require('dotenv').config()

//  const mongooURL=process.env.MONGP_URL_LOCAL

// const mongooURL="mongodb://localhost:27017/hotel"
const mongooURL=process.env.MONGOURL

mongoose.connect(mongooURL,{



})

const db =mongoose.connection;

db.on("connected",()=>{
    console.log("mongodb server is connected")
})

db.on("error",(err)=>{
    console.log("mongodb server is error",err)
})


db.on("disconnected",()=>{
    console.log("mongodb server is disconnected")
})



module.exports=db;


