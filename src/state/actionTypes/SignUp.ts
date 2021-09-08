  
export enum SignUpActionTypes{ 

    CREATE_USER_SUBMITTED="CREATE_USER_SUBMITTED",
    CREATE_USER_SUCCESS="CREATE_USER_SUCCESS",
    CREATE_USER_ERROR="CREATE_USER_ERROR"
    

}


interface CreateUserSubmit{
    type:SignUpActionTypes.CREATE_USER_SUBMITTED,
    
} 

interface CreateUserSuccess{
    type:SignUpActionTypes.CREATE_USER_SUCCESS,
    
}
interface CreateUserError{
    type:SignUpActionTypes.CREATE_USER_ERROR,
    payload:String
} 


export type SignUpAction= CreateUserSubmit|CreateUserSuccess|CreateUserError

