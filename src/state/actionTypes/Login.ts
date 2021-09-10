

export enum LoginActionTypes{
    LOGIN_SUCCESS="LOGIN_SUCCESS",
    LOGIN_ERROR="LOGIN_ERROR",
    LOGIN_USER="LOGIN_USER",
    LOGOUT_SUCCESS="LOGOUT_SUCCESS",
    LOGOUT_ERROR="LOGOUT_ERROR"
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

interface LOGOUT_SUCCESS{
    type:LoginActionTypes.LOGOUT_SUCCESS,
    payload:String
}

interface LogoutError{
    type:LoginActionTypes.LOGOUT_ERROR,
    payload:String
}






export  type LoginActions= LoginSuccess|LoginError|LoginUser|LOGOUT_SUCCESS|LogoutError