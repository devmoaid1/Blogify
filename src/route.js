
import { Route ,Router} from "react-router-dom"; 
import { createBrowserHistory } from 'history'
import LandingView  from "./Views/Landing page/LandingView"; 
import LoginView from "./Views/Sign in/LoginView";
import SignupView from "./Views/SignUp/SignupView";
import HomeView from "./Views/Home/HomeView";


const BaseRouter = () => {
  const newHistory = createBrowserHistory();
  return(
    <div>
     <Router history={newHistory}>
      <Route exact path="/" component={LandingView} />
      <Route exact path="/Login/" component={LoginView} />
      <Route exact path="/Signup/" component={SignupView} /> 
      <Route exact path="/home/" component={HomeView} />
      </Router>      
    </div>
  )


}

  
    
  
  
  export default BaseRouter;