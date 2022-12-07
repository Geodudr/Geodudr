import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Room from '../pages/Room';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Signup from '../pages/Signup';

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path = '/' element={< Login navigate={navigate}/>}/>
      <Route path = '/main' element={< Main />}/>
      <Route path = '/video' element={< Room />}/>
      <Route path= '/signup' element={< Signup navigate={navigate}/>} />
    </Routes>
  )
}

export default App