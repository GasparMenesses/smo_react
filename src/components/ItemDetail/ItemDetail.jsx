import React from 'react';
import { useState, useContext } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

import './ItemDetail.css';

export const ItemDetail = ({ producto }) => {
    const [toggle, setToggle] = useState(false);
    const { añadirProductoAlCarrito } = useContext(CartContext);
  
    const añadirProducto = (contador) => {
      setToggle(true);
      const productoCarrito = { ...producto, cantidad: contador };
      añadirProductoAlCarrito(productoCarrito);
  if (!producto || Object.keys(producto).length === 0) {
    return <p>Cargando detalles del producto...</p>; 
  }
}
  return (
    <div className='ItemDetail'>
        <img className='imgDetail' src={producto.imagen} alt={producto.descripcion || 'Producto'} />
        <div className='details'>
          <h2 className='h2Detail'>{producto.nombre}</h2>
          <h3 className="h3Detail">{producto.descripcion}</h3>
          <p className='pDetail'>Precio: ${producto.precio}</p>
        </div>
        {toggle ? (
          <>
          <div className='seguirCompra'>
            <Link className="button-terminar" to="/carrito">
                <p className='irCarritoText'>Ir Al Carrito</p>
              </Link>
              <Link className="button-terminar" to="/">
                <p className='irCarritoText'>Seguir Comprando</p>
              </Link>
          </div>
          </>
        ) : (
          <ItemCount stock={producto.stock} añadirProducto={añadirProducto} />
        )}
    </div>
  );
}
