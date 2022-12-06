import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Room from '../pages/Room';
import Login from '../pages/Login';

function App() {
  return (
    <div className='router'>
      <h1>App</h1>
      <Room/>
    {/* <Routes>
      <Route
        path = '/Login'
        element={<Login/>}
      />
      <Route
        path = '/main'
        element={<Dashboard/>}
      />
      <Route
        path = '/'
        element={<Room/>}
      />
    </Routes>

    <Login/> */}
    </div>
  )
}

export default App