import React from 'react';

export default function Botonera() {
  return (
    <>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name='inlineRadioOptions'
          id='inlineRadio1'
          value='simple'
        />
        <label className='form-check-label' for='inlineRadio1'>
          Simple - $850
        </label>
        
      </div>

      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name='inlineRadioOptions'
          id='inlineRadio2'
          value='doble'
        />
        <label className='form-check-label' for='inlineRadio2'>
          Doble - $950
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name='inlineRadioOptions'
          id='inlineRadio2'
          value='triple'
        />
        <label className='form-check-label' for='inlineRadio2'>
          Triple - $1050
        </label>
      </div>
    </>
  );
}
