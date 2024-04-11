import { useState } from 'react'
import './App.css'
import Menu from './components/NavMenu'
import {Route , Routes} from 'react-router-dom'
import Hero from './pages/Hero'
import Init from './pages/Init'
import Dashboard from './pages/Dashboard'
 
function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/init" element={<Init />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
