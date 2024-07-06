import React from 'react'
import { useState } from 'react'

import './ItemCount.css'
export const ItemCount = ({stock, añadirProducto}) => {

  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  }

  return (
  <div className="itemCount">
    <div className="controles">
    <p className='contadorCarrito'>{contador}</p>
      <button className='botonCarrito' onClick={restar}>-</button>
      <button className='botonCarrito' onClick={() => añadirProducto(contador)} >
      Agregar al carrito
    </button>
      <button className='botonCarrito' onClick={sumar}>+</button>
    </div>

  </div>
  );
};
