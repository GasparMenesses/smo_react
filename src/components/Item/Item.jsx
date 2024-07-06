import React from 'react'
import "./Item.css";

export const Item = ({producto}) => {
  return (
    <div className='item'>
        <img className='imageItem' src={producto.imagen} alt={producto.nombre} />
        <p className='titulo'>  {producto.nombre} </p>
        <p className='precio'>  {producto.precio} </p>
        <a href="" className="link">Ver Detalles</a>
    </div>
  )
}
    