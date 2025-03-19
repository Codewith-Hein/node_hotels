let mongoose=require("mongoose");


const mongooUrl="mongodb://localhost:27017/hotel"

mongoose.connect(mongooUrl,{


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