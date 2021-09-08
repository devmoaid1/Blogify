

import './App.css';

import BaseRouter from './route';
import configureStore from './state/Store'
import { Provider } from 'react-redux';



const store=configureStore() 

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

function App() { 
  
  return (
    <div className="App"> 

    <Provider store={store}> 
      <BaseRouter/> 
    </Provider>
     
    </div>
  );
}

export default App;
