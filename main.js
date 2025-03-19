const express = require('express')
const app = express()
const db = require("./db")

const bodyParser = require("body-parser")
app.use(bodyParser.json())


const { join } = require('lodash')



app.get('/', function (req, res) {
  res.send('Hello World')
})


const personRouter=require("./router/personRouter")
app.use("/person",personRouter)


const menuItemrouter=require("./router/menuItemroter")
app.use("/menu",menuItemrouter)
app.listen(3000, () => {
  console.log("server 3000 is active")
})





