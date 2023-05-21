import React from 'react'
import ReactDOM from 'react-dom/client'
import Reset from "./css/Reset"
import App from './components/App'
import GlobalStyle from './css/GlobalStyle'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
