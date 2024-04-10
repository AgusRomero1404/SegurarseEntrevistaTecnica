import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/NavMenu'
import Home from './components/Home'
import {Link, Route , Routes} from 'react-router-dom'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <header>
      <h1>Desafio Segurarse</h1>
      <Link to="/menu">Menu</Link>
     </header>
      <Routes>
        <Route path= '/menu' element={<Menu />}/>
      </Routes>
    </div>
  )
}

export default App
