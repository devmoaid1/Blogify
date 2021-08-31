
import { Route } from "react-router-dom"; 
import HomeView  from "./Views/Home/HomeView"; 
import LoginView from "./Views/Sign in/LoginView";
import {Router} from 'react-router-dom'


const BaseRouter = () => (
    <div>
     
      <Route exact path="/" component={HomeView} />
      <Route exact path="/Login/" component={LoginView} />
            
    </div>
  );
  
  export default BaseRouter;