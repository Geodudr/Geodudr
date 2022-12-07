import React from 'react'
import style from '../styles/navBar.scss';
function NavBar(loggedIn, setLoggedIn) {

    const handleClick = () => {
        setLoggedIn(false);
    }

  return (
    <div className='navBar'>
        {loggedIn ? 
            (
            <>
                <button>My Account</button>
                <button onClick={() => handleClick()}>Log Out</button>
            </>
            ) : (
            <>
                <button onClick={() => navigate('/Login')}>Login</button>
                <button onClick={() => navigate('/signup')}>Register</button>
            </>
            )
        }
    </div>
  )
}

export default NavBar;