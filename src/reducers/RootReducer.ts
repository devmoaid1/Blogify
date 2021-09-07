import {combineReducers} from 'redux'; 
import { connectRouter } from 'connected-react-router';
import { SignUpReducer } from './userReducer';


const RootReducer=(history:any)=>

    combineReducers({
        router:connectRouter(history),
        signUp:SignUpReducer
    })


export type AppState= ReturnType<typeof RootReducer>

export default RootReducer