
import { SignUpActionTypes, SignUpAction } from '../actionTypes/SignUp'
import { LoginActionTypes,LoginActions } from '../actionTypes/Login'


export interface UserCreation{
  error:String,
  isSubmitted:Boolean
} 

const signUpState:UserCreation={
    error:"",
    isSubmitted:false
}



export const SignUpReducer=(state:UserCreation=signUpState,action:SignUpAction)=>{

    switch(action.type){

      
      case SignUpActionTypes.CREATE_USER_SUBMITTED: 
      return{error:'',isSubmitted:true} 

      case SignUpActionTypes.CREATE_USER_ERROR: 
       return{isSubmitted:false,error:action.payload}


       case SignUpActionTypes.CREATE_USER_SUCCESS: 
          return{error:'',isSubmitted:true}

          default :
          return state


    }

} 


export interface LoginState{
  error:String,
  token:String,
  isLogged:Boolean,
  user:{}
} 


const loginState:LoginState={
  error:"",
  token:"",
  user:{},
  isLogged:false
}

export const LoginReducer=(state:LoginState=loginState,action:LoginActions)=>{

    switch(action.type){

        case LoginActionTypes.LOGIN_SUCCESS:

        return {user:{},error:"",token:action.payload,isLogged:true} 
        
        case LoginActionTypes.LOGIN_USER:

          return {...state,user:action.payload,isLogged:true} 


        case LoginActionTypes.LOGIN_ERROR: 

        return{

             error:action.payload, 
             token:"",
             isLogged:false,
             user:{}
        }

        default: 
        return state

    }





}

