import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'

function App() {

  const [isLoggedin, setLoggedin] = useState(false);

  // 46 min

  return (
    <div>
      <Navbar isLoggedin={isLoggedin} setLoggedin={setLoggedin} />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
    </div>
  )
}

export default App
