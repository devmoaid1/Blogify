import express from 'express' 

const route=express() 



//get profile`s user   

route.get('/:userID')


// get all profiles

route.get('/')

//create profile 

route.post('/') 


// update profile

route.patch('/:profileId') 

// follow user

route.patch('/follow/:profileId') 

export default route