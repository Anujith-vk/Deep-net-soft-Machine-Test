import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home';
import Additem from './pages/Additem';
import Reservations from './pages/Reservations';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/add' element={<Additem/>}/>
      <Route path='/reservations' element={<Reservations/>}/>
    </Routes>
  );
}

export default App;
