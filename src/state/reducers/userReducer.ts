import {CREATE_USER_ERROR,CREATE_USER_SUBMITTED,CREATE_USER_SUCCESS} from '../actionTypes/types'
import { ActionTypes, SignUpAction } from '../actionTypes/SignUp'



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

      
      case ActionTypes.CREATE_USER_SUBMITTED: 
      return{error:'',isSubmitted:true} 

      case ActionTypes.CREATE_USER_ERROR: 
       return{isSubmitted:false,error:action.payload}


       case ActionTypes.CREATE_USER_SUCCESS: 
          return{error:'',isSubmitted:true}

          default :
          return state


    }

}

