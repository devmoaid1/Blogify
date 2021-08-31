
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    primary: {
      100: "#0ACFA0",
      // ...
      900: "#1a202c",
    },
  },
})


const app=(

<div>
  <ChakraProvider theme={theme}>
  <App/>
  </ChakraProvider>
</div>)
ReactDOM.render(
  app,
  document.getElementById('root')
);


