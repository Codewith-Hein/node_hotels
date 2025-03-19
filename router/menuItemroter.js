const express=require("express");
const router=express.Router();

const menuItem = require('./../model/menuItem');
const { model } = require("mongoose");




router.post('/',async (req,res) =>{
    try{
    const data=req.body
    
    const menu=new menuItem(data)
    
    
    const respond=await menu.save()
    console.log("menu is store")
    res.status(200).json(respond)
    
    
    }catch(err){
    
      console.log("menu is fuck off")
    res.status(500).json(err)
    
    }
    
    
    })  
  
  
    router.get("/",async (req,res)=>{
  try{
  
    data= await menuItem.find()
    console.log("menu is store")
    res.status(200).json(data)
    
  
  
  }catch(err){
    onsole.log("menu is fuck off")
    res.status(500).json(err)
    
  }
  
    })
  

    router.get('/:taste',async(req,res)=>
    {
        try{
const tastetype=req.params.tastetype

if(tastetype==='sweet'|| tastetype==='sour'|| tastetype==='spicy'){

    const respond=await menuItem.find({taste:tastetype})
    res.status(200).json(respond)
}

        }catch(err){

            onsole.log("menu is fuck off")
            res.status(500).json(err)
        }
    })



    router.put('/:id',async (req,res)=>{
      try{
const menuid=req.params.id
const updatemenuid=req.body

const respond=await menuItem.findByIdAndUpdate(menuid,updatemenuid,{
  new:true,
  runValidators:true
})

if(!respond){
  res.status(404).json({error:"id not found"})
}

console.log("menudata was updated")
res.status(200).json(respond)


      }catch(err){
        onsole.log("menu is fuck off")
        res.status(500).json(err)
      }
    })


    router.delete('/:id',async (req,res)=> {
      try{
const menuid=req.params.id
const respond=await menuItem.findByIdAndDelete(menuid)

if(!respond){
  res.status(404).json({error:"id not found"})
}

res.status(200).json({message:"menudata was deleted"})

      }catch(err){
        onsole.log("menu is fuck off")
        res.status(500).json(err)
      }
    })
  

    module.exports=router
  
  