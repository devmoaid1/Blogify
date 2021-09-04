import express from 'express' 
import bcrypt from'bcrypt' 
import jwt from'jsonwebtoken'
import Users from'../models/user'
const app=express()

const TOKEN_SECRET="sdsdfwdfwjdnjnyhybshd6678939734$5^%#@$##$wewerew"

app.use(express.json()) 


// get all users 
app.get('/users',async(req,res)=>{

   try{
        const blogs= await Users.find() 
        res.json(blogs)
   }catch(err){ 
 
     res.status(500).json({massage:err.massage})
 
   } 
 
 }) 



 //login a user 

 app.post("/login",async(req,res)=>{

    const {email,password}=req.body 

    const user=await Users.findOne({email:email}).lean() 

    if(!user){
      return res.json({ status: 'error', error: 'Invalid username/password' })
    } 


    if(await bcrypt.compare(password,user.password)){
        
      const token= jwt.sign(
         {id:user._id,
         email:user.email
      },
         
         TOKEN_SECRET) 
      res.json({status:'ok',data:token})


    }else{

       res.json({ status: 'error', error: 'Invalid username/password' })
    }
    

 })


// Register a user 
app.post('/register',async (req,res)=>{ 

  const{username,password,email}=req.body
 
  if(!username || typeof username!=='string'){
     res.status(400).json({massage:"Invalid username"})
  } 

  if(!email || typeof email!=='string' || !email.includes('@')){
   res.status(400).json({massage:"Invalid Email"})
} 

if(!password || typeof password!=='string'){
   res.status(400).json({massage:"Invalid password"})
} 


if(password.length<5){
   res.status(400).json({massage:"password too small"})
}

   const hashedPassword= await bcrypt.hash(req.body.password,10)

   const user={username:username,email:email,password:hashedPassword} 

   try{
            
      const newusers=await Users.create(user) 

      res.status(201).json(newusers)


   }catch(err){ 
     if(err.code===11000){

        res.status(400).json({massage:"username already in use"})
     }
       throw err
   }



})



module.exports=app
