import {combineReducers} from 'redux'; 
import { connectRouter } from 'connected-react-router';



const RootReducer=(history:any)=>

    combineReducers({
        router:connectRouter(history),
        
    })


export default RootReducer