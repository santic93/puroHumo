import React, { useState, useEffect } from 'react';
import '../assets/styles/Menu.css';
import {
  ref,
  onValue,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';
import db from '../firebase.js';
import Botonera from './Botonera';
import Loader from './Loader';

export default function Nuggets() {
    let data = []
  let [nuggets, setNuggets] = useState([]);
  let [loader, setLoader] = useState(true);
  let refNuggets = ref(db, 'nuggets/');

  useEffect(() => {
    onValue(refNuggets, (snap) => {
      data = snap.val();
      setNuggets(data);
      data !== [] && setLoader(false);
    });
  
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <h3 className='titulo'>Nuggets</h3>
          <div class='row row-cols-1 row-cols-md-3 g-4'>
            {nuggets.map((dat, ind) => (
              <div className='col' key={ind}>
                <div className='card h-100'>
                  <img src={dat.img} class='card-img-top' alt='imagen lomo' />
                  <div className='card-body'>
                    <h5 className='card-title'>{dat.nombre}</h5>
                    <p className='card-text'>{dat.ingredientes}</p>
                    <div class='d-grid gap-2 d-md-flex justify-content-md-end'>
                      <Botonera />
                      <button className='btn btn-primary me-md-2' type='button'>
                        Agregar!
                      </button>
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
