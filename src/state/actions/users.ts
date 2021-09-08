import axios from "axios"; 
import {Dispatch} from 'redux'
import { ActionTypes, SignUpAction } from "../actionTypes/SignUp";

// Sign up a user 
interface User{
    username:String,
    email:String,
    password:String
}


export const signUp=(user:User)=>(dispatch:Dispatch<SignUpAction>)=>{ 
   
    // dispatch({type:ActionTypes.CREATE_USER_SUBMITTED})
    axios.post('http://localhost:8000/Auth/register',user).then(res=>{
                  
        console.log(res.data)
    
      dispatch({type:ActionTypes.CREATE_USER_SUCCESS})
    
    }
    
    
    ).catch(err=>dispatch({type:ActionTypes.CREATE_USER_ERROR,payload:err.response.data.massage}))
       

}