import React from 'react'
import NavBar from '../components/NavBar';
import Menu from '../components/Menu';

const Main = (loggedIn, setLoggedIn, navigate) => {

  console.log(loggedIn);

  return (
    <div>
      <h1>Main Menu</h1>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Menu navigate={navigate}/>
    </div>
  );
};

export default Main;