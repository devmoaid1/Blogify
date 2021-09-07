import {CREATE_USER_ERROR,CREATE_USER_SUBMITTED,CREATE_USER_SUCCESS} from '../actions/types'

export interface UserCreation{
  error:String,
  isSubmitted:Boolean
} 

const signUpState:UserCreation={
    error:"",
    isSubmitted:false
}

type Action={type:String,payload:String}

export const SignUpReducer=(state:UserCreation=signUpState,action:Action)=>{

    switch(action.type){

         case CREATE_USER_ERROR: 
          return{...state,error:action.payload}

        case CREATE_USER_SUBMITTED: 
          return{error:'',isSubmitted:true} 

          case CREATE_USER_SUCCESS: 
          return{error:'',isSubmitted:false}

          default :
          return state


    }

}

