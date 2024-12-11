import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'


const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Navigate to='/Home'/>}/>
       <Route path='/Home' element={<Home/>}/>
       <Route path='/menu' element={<Menu/>}/>
       <Route path='/reservation' element={<Reservation/>}/>
      </Routes>
    </div>
  )
}

export default App
