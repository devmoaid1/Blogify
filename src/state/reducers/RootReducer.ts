import {combineReducers} from 'redux'; 
// import { connectRouter } from 'connected-react-router';
import { SignUpReducer } from './userReducer';


const RootReducer=combineReducers({
        
        signUp:SignUpReducer
    })


export type AppState= ReturnType<typeof RootReducer>

export default RootReducer