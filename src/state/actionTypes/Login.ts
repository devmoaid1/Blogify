

export enum LoginActionTypes{
    LOGIN_SUCCESS="LOGIN_SUCCESS",
    LOGIN_ERROR="LOGIN_ERROR",
    LOGIN_USER="LOGIN_USER"
} 


interface LoginSuccess{
    type:LoginActionTypes.LOGIN_SUCCESS,
    payload:String
}

interface LoginError{
    type:LoginActionTypes.LOGIN_ERROR,
    payload:String
}

interface LoginUser{
    type:LoginActionTypes.LOGIN_USER,
    payload:{}
}



export  type LoginActions= LoginSuccess|LoginError|LoginUser