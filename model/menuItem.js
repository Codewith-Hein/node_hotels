const mongoose=require("mongoose")



const menuSchema=new mongoose.Schema({
name:{
type:String,
required:true

},

price:{
type:Number,
required:true

},

taste:{
    type:String,
    enum:['sweet','spicy','sour'],
    required:true
},
is_drink:{
type:Boolean,
default:false

},

ingredient:{
    type:[String],
    default:[]
},

numsale:{
    type:Number,
    default:0,
}


})


const menuItem=mongoose.model('menuItem',menuSchema);

module.exports=menuItem;