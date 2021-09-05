import express from 'express'
import  Profile from '../models/profile' 

const routes=express()


//get profile`s user   

routes.get('/:userID',async(req,res)=>{


     const userId=req.params.userID
  try{
       const user= await Profile.findOne({owner:userId})
       res.json(user)
  }catch(err){ 

    res.status(500).json({massage:err.massage})

  } 

})



routes.get('/',async(req,res)=>{


    
 try{
      const user= await Profile.find()
      res.json(user)
 }catch(err){ 

   res.status(500).json({massage:err.massage})

 } 

}) 



//create profile 


routes.post('/',async(req,res)=>{

    const profile= new Profile({
       
        bio:req.body.bio,
        email:req.body.email,
        
        owner:req.body.owner,
        followers:req.body.followers
        
        
        
    })
 
    try{ 
 
     const newProfile= await profile.save() 
     res.status(201).json(newProfile)
        
 
    }catch(err){
     res.status(400).json({massage:err.massage})
    }

}) 









// update profile

routes.patch('/:profileId',async(req,res)=>{
   
   const id=req.params.profileId
   const bio=req.body.bio 
   try{ 

    const updatedProfile= await Profile.updateOne({_id:id},{$set:{bio:bio}}) 
    res.status(201).json(updatedProfile)
       

   }catch(err){
    res.status(400).json({massage:err.massage})
   }


})

// follow user



routes.patch('follow/:profileId',async(req,res)=>{
   
    const id=req.params.profileId
    const follower=req.body.follower 
    try{ 
       
      const profile= await Profile.findOne({owner:id}) 

      const updatedFollowers= await profile.followers.push(follower)
        
      
     
 
     
 
     const updatedProfile= await Profile.findByIdAndUpdate(id,updatedFollowers) 
     res.status(201).json(updatedProfile)
        
 
    }catch(err){
     res.status(400).json({massage:err.massage})
    }
 
 
 })


export default routes