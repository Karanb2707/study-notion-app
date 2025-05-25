import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'

function App() {

  const [isLoggedin, setLoggedin] = useState(false);

  return (
    <div className='w-10/12 mx-auto bg-slate-600 h-screen'>
      <Navbar isLoggedin={isLoggedin} setLoggedin={setLoggedin} />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setLoggedin={setLoggedin}/>}/>
        <Route path='/signup' element={<Signup setLoggedin={setLoggedin}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
    </div>
  )
}

export default App
