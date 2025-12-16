import React from 'react'
import NavBar from './components/navBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App