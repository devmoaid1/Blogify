
import RootReducer from "./reducers/RootReducer";
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history"; 
import {  routerMiddleware, } from "connected-react-router";





 const configureStore=()=>{ 

   const history=createBrowserHistory()
   
   const middleware=[thunk,routerMiddleware(history)] 

   const store=createStore(RootReducer,{},composeWithDevTools(applyMiddleware(...middleware))) 


     return store
   
} 

export default configureStore

