import Context from './Context';
import axios from 'axios';
import { useReducer } from 'react';
import reducer from './reducer';

export default function UseContext({ children }) {
  const initialState = {
    hamburguesas: [],
    lomos: [],
    nugguets: [],
    carrito: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const listarHamburguesas = async () => {
    const res = await axios.get(
      'https://puro-humo-default-rtdb.firebaseio.com/hamburguesas.json'
    );
    dispatch({ type: 'LISTAR_HAMBURGUESAS', payload: res.data });
  };
  const agregarCarrito = (item, nombre) => {
    dispatch({ type: 'AGREGAR_CARRITO', payload: item, nombre });
  };
  return (
    <Context.Provider
      value={{
        hamburguesas: state.hamburguesas,
        carrito: state.carrito,
        listarHamburguesas,
        agregarCarrito,
      }}
    >
      {children}
    </Context.Provider>
  );
}
