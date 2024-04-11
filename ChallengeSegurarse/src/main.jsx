import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login.jsx'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Admin from './components/Admin.jsx'
import NavMenu from './components/NavMenu.jsx'
import UserForm from './components/UserForm.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Init from './pages/Init.jsx'
import Hero from './pages/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserForm />
  </BrowserRouter>,
)
