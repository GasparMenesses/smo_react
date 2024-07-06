import React, { useContext } from 'react'; // Importa useContext correctamente
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


import './Carrito.css';

export const Carrito = () => {
    const { carrito, borrarProducto, precioTotal, borrarCarrito  } = useContext(CartContext);

    if(carrito.length === 0){
        return(
            Swal.fire({
                icon: "error",
                title: "Carrito Vacío",
                text: "Actualmente no existen productos en el carrito",
                confirmButtonColor: '#2c5bac',
                confirmButtonText: 'Cerrar'
              }),

              <div className='errorMs'>
              <h2>Para continuar por favor agrega productos a tu carrito de compras</h2>
              <Link className='volverInicio' to="/"> Seguir comprando </Link>
            </div>   
        )
      }

    return (
        <div>
            <ul>
                {carrito.map((producto) => (
                    <div className='divCarrito' key={producto.id}>
                        <img className='imgCarrito' src= {producto.imagen} alt="" />
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
