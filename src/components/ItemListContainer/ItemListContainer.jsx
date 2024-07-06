import { useParams, useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useState, useEffect } from 'react';
import db from '../../db/db';
import './ItemListContainer.css';

export const ItemListContainer = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        let productosRef = collection(db, 'productos');
        let consulta;

        if (categoria) {
          consulta = query(productosRef, where('categoria', '==', categoria));
        } else {
          consulta = productosRef;
        }

        const querySnapshot = await getDocs(consulta);
        const productosData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProductos();
  }, [categoria]);

  return (
    <div className='containerItems'>
      {productos.map((product) => (
        <div key={product.id} className='item' onClick={() => navigate(`/item/${product.id}`)}>
          <figure>
            <img className='imgProduct' src={product.imagen} alt={product.nombre} />
          </figure>
          <div className='infoProduct'>
            <h2>{product.nombre}</h2>
            <p className='price'>${product.precio}</p>
            <button className='listButton'>Ver Producto</button>
          </div>
        </div>
      ))}
    </div>
  );
};



        
