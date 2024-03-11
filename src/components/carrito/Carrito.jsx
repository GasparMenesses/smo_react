import React, { useContext } from 'react'; // Importa useContext correctamente
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import './Carrito.css';

export const Carrito = () => {
    const { carrito, borrarProducto, precioTotal, borrarCarrito  } = useContext(CartContext);

    if(carrito.length === 0){
        return(
          <div>
            <h2>No existen productos en el carrito</h2>
            <Link to="/"> Volver al inicio </Link>
          </div>
        )
      }

    return (
        <div>
            <ul>
                {carrito.map((producto) => (
                    <div className='divCarrito' key={producto.id}>
                        <img src= {producto.imagen} alt="" />
                        <p> {producto.nombre} </p>
                        <p> ${producto.precio} </p>
                        <p> Cantidad: {producto.cantidad} </p>
                        <button className='botonBorrarProcuto' onClick={ () => borrarProducto(producto.id) }>Eliminar Producto</button>
                    </div>
                ))}
            </ul>
            <div>
                <p className='precioTotal'>Precio Total: ${precioTotal()}</p>
            </div>
            <div className='totalCarrito'>
                <button className='botonBorrarCarrito' onClick={borrarCarrito} >Vaciar carrito</button>
                <Link className='continuarCompra' to="/checkout" >Finalizar Compra</Link>
            </div>
        </div>
    );
};
