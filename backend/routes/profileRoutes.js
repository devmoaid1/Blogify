import express from 'express' 
import getUserProfile,{followUser,createProfile,getAllProfiles,updateProfile} from '../controllers/profileController'
const route=express() 



//get profile`s user   

route.get('/:userID',getUserProfile)


// get all profiles

route.get('/',getAllProfiles)

//create profile 

route.post('/',createProfile) 


// update profile

route.patch('/:profileId',updateProfile) 

// follow user

route.patch('/follow/:profileId',followUser) 

export default route