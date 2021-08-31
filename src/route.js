
import { Route ,Router} from "react-router-dom"; 
import { createBrowserHistory } from 'history'
import HomeView  from "./Views/Home/HomeView"; 
import LoginView from "./Views/Sign in/LoginView";
import SignupView from "./Views/SignUp/SignupView";


const BaseRouter = () => {
  const newHistory = createBrowserHistory();
  return(
    <div>
     <Router history={newHistory}>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/Login/" component={LoginView} />
      <Route exact path="/Signup/" component={SignupView} />
      </Router>      
    </div>
  )


}

  
    
  
  
  export default BaseRouter;