import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Store from './store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>
)
