import React from 'react'
import style from '../styles/menu.scss';
import { useNavigate } from 'react-router-dom';

function Menu() {

const navigate = useNavigate();

  return (
    <>
     <div class="wrapper">
        <form>
            <label>Public Room: {" "}</label>
            <input name='username' type='text' placeholder='Room name'></input>
            <button type='submit'>Create Room</button>
        </form>
        <form>
            <label>Private Room: {" "}</label>
            <button type='submit' onClick={() => navigate('/room')}>Create Room</button>
        </form>
        <table id="chatRoomsTable">
            <tr>
                <label>Among Us</label>
                <button>Join</button>
            </tr>
            <tr>
                <label>Pokemon</label>
                <button>Join</button>
            </tr>
            <tr>
                <label>Amog-Us</label>
                <button>Join</button>
            </tr>
            <tr>
                <label>Code n Chill</label>
                <button>Join</button>
            </tr>
            <tr>
                <label>Amoonguss</label>
                <button>Join</button>
            </tr>
        </table>
     </div>   
    </>
  )
}

export default Menu;
