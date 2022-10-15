import React, { useEffect } from 'react';
import "../assets/styles/Menu.css"
export default function Menu() {
  return (
    <>
    <h3 className='titulo'>Tenemos todas estas opciones para ofrecerte</h3>
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top img-fluid" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
      {/* <div className='row row-cols-1 row-cols-md-2 g-4'>
        {data.map((dat, ind) => (
          <div className='col'>
            <div className='card'>
              <div key={ind}>
                <img src='...' className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>{dat.nombre}</h5>
                  <p className='card-text'>{dat.ingredientes}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
}
