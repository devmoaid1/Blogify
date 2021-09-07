

import './App.css';

import BaseRouter from './route';
import configureStore from './Store';
import { Provider } from 'react-redux';
function App() { 
  
  const store=configureStore()
 
  return (
    <div className="App"> 

    <Provider store={store}> 
      <BaseRouter/> 
    </Provider>
     
    </div>
  );
}

export default App;
