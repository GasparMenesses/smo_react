import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

import './NavBar.css';


export const Navbar = () => {
  return (
    <div>
        <header>
            <nav className='NavBar'>
                <Link to="/">
                  <img className='logo' src='https://raw.githubusercontent.com/GasparMenesses/smo-club/master/images/PhotoRoom_20230301_114227.png' alt="Logo" />
                </Link>
                <ul>
                    <li>
                      <Link to="/categoria/camisetas">CAMISETAS</Link>
                    </li>
                    <li>
                      <Link to="/categoria/gorros">GORROS</Link>
                    </li>
                    <li>
                     <Link to="/categoria/buzos">BUZOS</Link>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    </div>
  );
};
