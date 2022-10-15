import React, { useContext, useEffect, useState } from 'react';
import '../assets/styles/Menu.css';
import Botonera from './Botonera';
import Loader from './Loader';
import Context from '../context/Context';
import Carrito from './Carrito';
export default function Hamburguesas() {
  let [loader, setLoader] = useState(true);
  const { listarHamburguesas, hamburguesas } = useContext(Context);
  useEffect(() => {
    listarHamburguesas();
    setLoader(false);
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <h3 className='titulo'>Hamburguesas</h3>
          <div class='row row-cols-1 row-cols-md-3 g-4'>
            {hamburguesas.map((dat, ind) => (
              <div className='col' key={ind}>
                <div className='card h-100'>
                  <img
                    src={dat.img}
                    class='card-img-top'
                    alt='imagen hamburguesa'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{dat.nombre}</h5>
                    <p className='card-text'>{dat.ingredientes}</p>
                    <div class='d-grid gap-2 d-md-flex justify-content-md-end'>
                      <Botonera />
                      <Carrito id={dat.id} nombre={dat.nombre} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
