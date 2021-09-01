const express=require('express') 
const app=express() 
const mongoose=require("mongoose") 
const cors=require('cors')
const blogsRoutes=require("./controllers/BlogController")
const AuthRoutes=require("./controllers/AuthController")
require('dotenv').config()

mongoose.connect(process.env.Mongo_URL,{useNewUrlParser:true}).then(()=>console.log("connected")).catch((err)=>console.error(err))

const db =mongoose.connection 
db.on('error',(error)=>console.error(error) )
db.once('open',()=>console.log("connected to database..."))

app.use(express.json())
app.use(cors())
app.use('/blogs',blogsRoutes)
app.use('/Auth',AuthRoutes)

app.listen(8000,()=>console.log("running on port 8000......."))