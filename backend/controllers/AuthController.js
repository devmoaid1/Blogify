const express=require('express') 
const app=express()
const bcrypt=require('bcrypt') 

const Users=require('../models/user')
app.use(express.json()) 


// Register a user 

app.post('/register',async (req,res)=>{

   const hashedPassword= await bcrypt.hash(req.body.password,10)

   const user={username:req.body.username,email:req.body.email,password:hashedPassword} 

   try{
            
      const newusers=await Users.create(user) 

      res.status(201).json(newusers)


   }catch(err){ 

    res.status(400).json({massage:err})

   }



})



module.exports=app