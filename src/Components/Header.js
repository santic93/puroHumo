import React, { useContext, useState } from 'react';
import cart from '../assets/images/cart-shopping-solid.svg';
import { NavLink, Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import Context from '../context/Context';
import Swal from 'sweetalert2';

export default function Header() {
  const { carrito } = useContext(Context);
  console.log(carrito);
  const compra = () => {
    carrito.length === 0 &&
      Swal.fire({
        title: 'Todavia no compraste!',
        text: 'Tu carrito se encuentra vacio',
        confirmButtonText: 'Ok',
      });
  };
  return (
    <>
      <nav className='nav nav-pills flex-column flex-sm-row principal'>
        <div className='carrito'>
          <Link onClick={compra}>
            <img src={cart} alt='carrito' />
            <span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
              {carrito.length}
            </span>
          </Link>
        </div>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? 'flex-sm-fill text-sm-center ov-btn-grow-box active'
              : 'flex-sm-fill text-sm-center ov-btn-grow-box'
          }
          to='/hamburguesas'
        >
          Hamburguesas
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? 'flex-sm-fill text-sm-center ov-btn-grow-box active'
              : 'flex-sm-fill text-sm-center ov-btn-grow-box'
          }
          to='/lomos'
        >
          Lomos
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? 'flex-sm-fill text-sm-center ov-btn-grow-box active'
              : 'flex-sm-fill text-sm-center ov-btn-grow-box'
          }
          to='/nuggets'
        >
          Nuggets
        </NavLink>
        <div className='redes'>
          <ul>
            {' '}
            <li>
              {' '}
              <i className='fa-brands fa-whatsapp fa-lg' /> 2324 54-3733{' '}
            </li>
            <li>
              {' '}
              <i className='fa-brands fa-instagram fa-lg' /> @purohumomercedes{' '}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
