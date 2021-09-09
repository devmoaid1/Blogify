import axios from "axios"; 
import {Dispatch} from 'redux'
import { LoginActions, LoginActionTypes } from "../actionTypes/Login";
import { SignUpActionTypes, SignUpAction } from "../actionTypes/SignUp";
import jwt from 'jwt-decode'
// Sign up a user 
interface User{
    username:String,
    email:String,
    password:String
} 


interface Login{
    email:String,
    password:String
}


export const signUp=(user:User)=>(dispatch:Dispatch<SignUpAction>)=>{ 
   
    // dispatch({type:ActionTypes.CREATE_USER_SUBMITTED})
    axios.post('http://localhost:8000/Auth/register',user).then(res=>{
                  
        console.log(res.data)
    
      dispatch({type:SignUpActionTypes.CREATE_USER_SUCCESS})
    
    }
    
    
    ).catch(err=>dispatch({type:SignUpActionTypes.CREATE_USER_ERROR,payload:err.response.data.massage}))
       

} 



export const login=(user:Login)=>(dispatch:Dispatch<LoginActions>)=>{
  
    axios.post('http://localhost:8000/Auth/login',user)
    .then(
        res=>{

            const token=res.data.data 
            const userData:{}=jwt(token)
            dispatch({type:LoginActionTypes.LOGIN_USER,payload:userData}) 
            dispatch({type:LoginActionTypes.LOGIN_SUCCESS,payload:token}) 
            localStorage.setItem('token',token) 



        }
    ).catch(
        
        
        err=>{dispatch({type:LoginActionTypes.LOGIN_ERROR,payload:err.response.data.error})}
        
    ) 

} 


export const getUser=(userId:String)=>(dispatch:Dispatch)=>{
    
      axios.get(`http://localhost:8000/profile/${userId}`)
      .then(res=>dispatch({type:LoginActionTypes.LOGIN_USER,payload:res.data}))
      .catch(err=>dispatch({type:LoginActionTypes.LOGIN_ERROR,payload:err.response.data.massage}))
    


}