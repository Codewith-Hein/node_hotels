const express = require("express");
const router = express.Router();
const person = require("./../model/person")




router.post('/', async function (req, res) {
  try {
    const data = req.body;

    const newPerson = new person(data)


    const respond = await newPerson.save()
    console.log("data saved")

    res.status(200).json(respond)


  }
  catch (err) {

    console.log(err)
    res.status(500).json({ err: "error is fuck" })




  }


})



router.get('/', async function (req, res) {

  try {

    const data = await person.find()

    console.log("data saved")

    res.status(200).json(data)
  } catch (err) {

    console.log(err)
    res.status(500).json({ err: "error is fuck" })

  }

})


router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype

    if (worktype === "chef" || worktype === "manger" || worktype === 'waiter') {

      const respond = await person.find({ work: worktype })

      res.status(200).json(respond)

    }
  } catch (err) {

    console.log(err)
    res.status(500).json({ err: "error is fuck" })

  }

})

router.put('/:id',async (req,res)=>{
try{
const personid=req.params.id
const updatepersondata=req.body

const respond=await person.findByIdAndUpdate(personid, updatepersondata,{
  new:true,
  runValidators:true,
})

if(!respond){
  res.status(404).json({error:"id not found"})
}

console.log("data is update")
  res.status(200).json(respond)
}catch(err){

  console.log(err)
  res.status(500).json({ err: "error is fuck" })
}
})

router.delete('/:id',async(req,res)=>{
  try{
const personid=req.params.id
const respond=await person.findByIdAndDelete(personid)

if(!respond){
  res.status(404).json({error:"id not found"})
}

console.log("data was deleted")
res.status(200).json({message:"successfully deleted data"})
  }catch(err){
    
    console.log(err)
    res.status(500).json({ err: "error is fuck" })
  }

})


module.exports = router