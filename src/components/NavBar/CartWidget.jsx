import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import './NavBar.css';


export const CartWidget = () => {

  const {cantidadProductosCarrito} = useContext(CartContext);

  return (
    <Link to="/carrito" className='carrito'>
       <FaShoppingCart/>
        {cantidadProductosCarrito()}
    </Link>
  )
}
