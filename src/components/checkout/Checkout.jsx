import React, { useContext, useState } from 'react'
import { FormularioCheckout } from './FormularioCheckout'
import { CartContext } from '../../context/CartContext';
import { collection,addDoc } from 'firebase/firestore';
import db from '../../db/db';

import './Checkout.css';

export const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        dirección: ""
    });

    const {carrito, precioTotal} =  useContext(CartContext);
    const [idOrden, setIdOrden] = useState(null)

    const guardarDatosInput = (event) =>{
        setDatosForm( {...datosForm, [event.target.name] : event.target.value } );
    }

    const enviarOrden = (event) =>{
        event.preventDefault();
        const orden = {
            comprador: {...datosForm},
            productos: [...carrito],
            total: precioTotal()
        }
        
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden)
         .then((respuesta)=> {
            setDatosForm({
                nombre: "",
                telefono: "",
                email: "",
                dirección:""
               //borrar datos input
            })

            setIdOrden(respuesta.id)
         })
         .catch((error)=> console.log(error))
    }

  return (
    <div>
        {
            idOrden ? (
                <div className='ordenId'>
                    <h2>Orden generada con éxito!</h2>
                    <p>El id de su orden es: {idOrden} </p>
                </div>
            ):(
                <FormularioCheckout datosForm={datosForm} guardarDatosInput={guardarDatosInput} enviarOrden={enviarOrden} />
            )
        }
    </div>
  )
}
