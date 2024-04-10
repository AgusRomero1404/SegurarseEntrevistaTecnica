import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login.jsx'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Admin from './components/Admin.jsx'
import NavMenu from './components/NavMenu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Admin />
  </BrowserRouter>,
)
