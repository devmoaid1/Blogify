import express from 'express' 
import mongoose from 'mongoose' 
import dotenv from 'dotenv'
import blogs from './controllers/BlogController';
import auth from "./controllers/AuthController" 
import comments from "./controllers/commentController"
import Profiles from './controllers/profileController' 
import cors from 'cors'

const app=express() 

dotenv.config()

mongoose.connect(process.env.Mongo_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  }).then(()=>console.log("connected")).catch((err)=>console.error(err))

const db =mongoose.connection 
db.on('error',(error)=>console.error(error) )
db.once('open',()=>console.log("connected to database..."))

app.use(express.json())
app.use(cors())

app.use('/blogs', blogs)
app.use('/Auth',auth)
app.use('/comments',comments)
app.use('/profile',Profiles)

app.listen(8000,()=>console.log("running on port 8000......."))