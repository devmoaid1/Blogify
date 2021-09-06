import express from 'express' 
import getAllUsers,{ loginUser,registerUser } from '../controllers/AuthController'
const route=express() 



route.get('/users',getAllUsers)


route.post('/login',loginUser)

route.post('/register',registerUser) 


export default route