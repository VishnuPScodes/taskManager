import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Allroutes } from './components/Allroutes'
import { Navbar } from './components/Navbar/Navbar'
import { Login } from './pages/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
    <Allroutes/>
    {/* <Login/> */}
    </div>
  )
}

export default App
