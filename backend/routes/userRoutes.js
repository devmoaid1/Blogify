import express from 'express' 
import getAllUsers,{ loginUser,registerUser,logout } from '../controllers/AuthController'
const route=express() 



route.get('/users',getAllUsers)


route.post('/login',loginUser)

route.post('/register',registerUser) 

route.get('/logout',logout)
export default route