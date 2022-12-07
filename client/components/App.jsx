import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Room from '../pages/Room';
import Login from '../pages/Login';

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path = '/' element={< Login navigate={navigate}/>}/>
      <Route path = '/main' element={< Login />}/>
      <Route path = '/video' element={< Room />}/>
    </Routes>
  )
}

export default App