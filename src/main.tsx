import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

const theme = {
  styles: {
    global: {
      '*': {
        'margin': 0,
        'padding': 0,
        'box-sizing': 'border-box'
      },
      'html,body,#root': {
        'height': '100%',
        'width': '100%'
      }
    }
  }
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </HelmetProvider></BrowserRouter>
  </React.StrictMode>,
)
