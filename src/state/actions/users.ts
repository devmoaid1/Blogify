import axios from "../../axios"; 
import {Dispatch} from 'redux'
import { LoginActions, LoginActionTypes } from "../actionTypes/Login";
import { SignUpActionTypes, SignUpAction } from "../actionTypes/SignUp";


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
    axios.post('/Auth/register',user).then(res=>{
                  
        console.log(res.data)
    
      dispatch({type:SignUpActionTypes.CREATE_USER_SUCCESS})
    
    }
    
    
    ).catch(err=>dispatch({type:SignUpActionTypes.CREATE_USER_ERROR,payload:err.response.data.massage}))
       

} 



export const login=(user:Login)=>(dispatch:Dispatch<LoginActions>)=>{
  
    axios.post('/Auth/login',user,{withCredentials:true})
    .then(
        res=>{

            const {token,user}=res.data
            dispatch({type:LoginActionTypes.LOGIN_USER,payload:user}) 
            dispatch({type:LoginActionTypes.LOGIN_SUCCESS,payload:token}) 
           



        }
    ).catch(
        
        
        err=>{dispatch({type:LoginActionTypes.LOGIN_ERROR,payload:err.response.data.error})}
        
    ) 

} 


export const logout=(dispatch:Dispatch<LoginActions>)=>{

   axios.get("/Auth/logout",{withCredentials:true}).then(res=>{

         dispatch({type:LoginActionTypes.LOGOUT_SUCCESS,payload:res.data.massage}) 

         
   }).catch(err=>dispatch({type:LoginActionTypes.LOGOUT_ERROR,payload:err.response.data.massage}))
  



}