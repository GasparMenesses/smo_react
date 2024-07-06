import React from 'react'

export const FormularioCheckout = ({ datosForm, guardarDatosInput, enviarOrden }) => {
  return (
    <form onSubmit={enviarOrden}>

        <label htmlFor='nombre'>Nombre</label>
        <input type="text" id='nombre' name='nombre' value={datosForm.nombre} onChange={guardarDatosInput} />
        <br />

        <label htmlFor="telefono">Telefono</label>
        <input type="number" id='telefono' name='telefono' value={datosForm.telefono} onChange={guardarDatosInput} />
        <br />

        <label htmlFor="EMAIL">Email</label>
        <input type="email" id='email' name='email' value={datosForm.email} onChange={guardarDatosInput} />
        <br />

        <label htmlFor="Dirección">Dirección</label>
        <input type="text" id='dirección' name='dirección' value={datosForm.dirección} onChange={guardarDatosInput} />
        <br />

        <button className='botonOrden' type='submit'>Enviar Orden</button>

    </form>
  )
}
