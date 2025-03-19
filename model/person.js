const mongoose =require ("mongoose");


// creat schema//

const personSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    work:{
        type:String,
        enum:["waiter","manger","chef"],
        required:true
    },

    mobile:{
type:Number,
required:true

    },

    email:{
type:String,
required:true,
unique:true

    },

    address:{
        type:String
    },

    salary:{

        type:Number,
        required:true
    }
      



})



//then you have to create model


const person=mongoose.model('person',personSchema)

module.exports=person;