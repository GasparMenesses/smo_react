import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../db/db';

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productoDoc = await getDoc(doc(db, 'productos', id));
        if (productoDoc.exists()) {
          setProducto({ id: productoDoc.id, ...productoDoc.data() });
        } else {
          console.log('No se encontró el producto');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProducto();
  }, [id]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};






