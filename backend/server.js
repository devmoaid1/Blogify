const express=require('express') 
const app=express() 
const mongoose=require("mongoose") 
require('dotenv').config()

mongoose.connect(process.env.Mongo_URL,{useNewUrlParser:true}).then(()=>console.log("connected")).catch((err)=>console.error(err))

const db =mongoose.connection 
const blogsRoutes=require("./controllers/BlogController")
db.on('error',(error)=>console.error(error) )
db.once('open',()=>console.log("connected to database..."))

app.use(express.json())
app.use('/blogs',blogsRoutes)


app.listen(8000,()=>console.log("running on port 8000......."))