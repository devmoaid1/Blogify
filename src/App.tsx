

import './App.css';
import {Router} from 'react-router-dom'
import BaseRouter from './route';
import { createBrowserHistory } from 'history'

function App() { 
  const newHistory = createBrowserHistory();
 
  return (
    <div className="App"> 
    <Router history={newHistory}>
      <BaseRouter/> 
      </Router>
    </div>
  );
}

export default App;
