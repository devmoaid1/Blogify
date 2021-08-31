
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"

const app=(

<div>
  <ChakraProvider>
  <App/>
  </ChakraProvider>
</div>)
ReactDOM.render(
  app,
  document.getElementById('root')
);


