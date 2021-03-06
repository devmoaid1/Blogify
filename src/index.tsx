
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

import './index.css';
import "@fontsource/raleway/600.css"
import "@fontsource/open-sans/700.css" 
import "@fontsource/oswald/400.css"
import "@fontsource/saira-condensed/700.css"

const theme = extendTheme({
  colors: {
    primary: {
      100: "#0ACFA0",
      // ...
      900: "#0ACFA0",
    },
  },

  fonts: {
    heading: "Oswald",
    body: "Raleway",
    saira:"Saira Condensed"
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


