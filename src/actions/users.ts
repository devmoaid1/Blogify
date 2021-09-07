import axios from "axios"; 
import { CREATE_USER_SUBMITTED ,CREATE_USER_ERROR,CREATE_USER_SUCCESS} from "./types";
import {Dispatch} from 'redux'

// Sign up a user 
interface userData{
    username:String,
    email:String,
    password:String
}


export const signUp=(user:userData)=>(dispatch:Dispatch)=>{ 
   
    dispatch({type:CREATE_USER_SUBMITTED})
    axios.post('http://localhost:8000/Auth/register',user).then(res=>{
                  
        console.log(user)
    
      dispatch({type:CREATE_USER_SUCCESS})
    
    }
    
    
    ).catch(err=>dispatch({type:CREATE_USER_ERROR,payload:err.massage}))
       

}