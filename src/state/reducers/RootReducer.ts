import {combineReducers} from 'redux'; 
// import { connectRouter } from 'connected-react-router';
import { SignUpReducer,LoginReducer } from './userReducer';


const RootReducer=combineReducers({
        
        signUp:SignUpReducer,
        login:LoginReducer
    })


export type AppState= ReturnType<typeof RootReducer>

export default RootReducer