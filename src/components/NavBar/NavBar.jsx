import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

import './NavBar.css';


export const Navbar = () => {
  return (
 
    <header>
    <nav className='NavBar'>
        <Link to="/">
          <div className='logo'>
            <img src="https://smo-club.vercel.app/images/PhotoRoom_20230301_114227.png" alt="" />
          </div>
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
            <li>
             <CartWidget/>
            </li>
        </ul>
    </nav>
</header>

  );
};
