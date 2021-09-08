  
export enum ActionTypes{ 

    CREATE_USER_SUBMITTED="CREATE_USER_SUBMITTED",
    CREATE_USER_SUCCESS="CREATE_USER_SUCCESS",
    CREATE_USER_ERROR="CREATE_USER_ERROR"
    

}


interface CreateUserSubmit{
    type:ActionTypes.CREATE_USER_SUBMITTED,
    
} 

interface CreateUserSuccess{
    type:ActionTypes.CREATE_USER_SUCCESS,
    
}
interface CreateUserError{
    type:ActionTypes.CREATE_USER_ERROR,
    payload:String
} 


export type SignUpAction= CreateUserSubmit|CreateUserSuccess|CreateUserError

