
import  Profile from '../models/profile' 




//get profile`s user   

const getUserProfile=async(req,res)=>{


     const userId=req.params.userID
  try{
       const user= await Profile.findOne({owner:userId})
       res.json(user)
  }catch(err){ 

    res.status(500).json({massage:err.massage})

  } 

} 





// get all profiles

export const getAllProfiles=async(req,res)=>{


    
 try{
      const user= await Profile.find()
      res.json(user)
 }catch(err){ 

   res.status(500).json({massage:err.massage})

 } 

}


//create profile 

export const createProfile=async(req,res)=>{

    const profile= new Profile({
       
        bio:req.body.bio,
        username:req.body.username,
        owner:req.body.owner,
        followers:req.body.followers 
    })
 
    try{ 
 
     const newProfile= await profile.save() 
     res.status(201).json(newProfile)
        
 
    }catch(err){
     res.status(400).json({massage:err.massage})
    }

}




// update profile

export const updateProfile=async(req,res)=>{
   
   const id=req.params.profileId
   const bio=req.body.bio 
   const username=req.body.username
   try{ 

    const updatedProfile= await Profile.updateOne({_id:id},{$set:{bio:bio,username:username}}) 
    res.status(201).json(updatedProfile)
       

   }catch(err){
    res.status(400).json({massage:err.massage})
   }


}

// follow user
export const followUser=async(req,res)=>{
   
    const id=req.params.profileId
    const newfollowers=req.body.followers 

    console.log(typeof newfollowers)
    try{ 
        
 
     const updatedProfile= await Profile.updateOne({_id:id},{$set:{followers:newfollowers}})
     res.status(201).json(updatedProfile)
        
 
    }catch(err){
     res.status(400).json({massage:err.massage})
    }
 
 
 }


export default getUserProfile