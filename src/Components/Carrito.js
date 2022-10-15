import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Carrito({ id, nombre }) {
  const { agregarCarrito } = useContext(Context);
  return (
    <>
      <button
        className='btn btn-primary me-md-2'
        type='button'
        onClick={() => {
          agregarCarrito(id, nombre);
        }}
      >
        Agregar!
      </button>
    </>
  );
}
