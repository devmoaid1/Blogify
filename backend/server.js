import express from 'express' 
 
import dotenv from 'dotenv'
import databaseConnection from './database'
import blogs from './routes/blogRoutes'
import auth from "./routes/userRoutes" 
import comments from "./routes/commentsRoutes"
import Profiles from './routes/profileRoutes' 
import cors from 'cors'

const app=express() 

dotenv.config()

databaseConnection()


app.use(express.json())
app.use(cors({origin:true,credentials:true}))

app.use('/blogs', blogs)
app.use('/Auth',auth)
app.use('/comments',comments)
app.use('/profile',Profiles)

app.listen(8081,()=>console.log("running on port 8081......."))