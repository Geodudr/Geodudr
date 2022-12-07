import React, {useState} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Room from '../pages/Room';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Signup from '../pages/Signup';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path = '/' element={< Login navigate={navigate} setLoggedIn={setLoggedIn}/>}/>
      <Route path = '/main' element={< Main loggedIn={loggedIn} setLoggedIn={setLoggedIn} navigate={navigate}/>}/>
      <Route path = '/room' element={< Room />}/>
      <Route path= '/signup' element={< Signup navigate={navigate}/>} />
    </Routes>
  )
}

export default App