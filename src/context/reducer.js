const LISTAR_HAMBURGUESAS = 'LISTAR_HAMBURGUESAS';
const AGREGAR_CARRITO = 'AGREGAR_CARRITO';

export default function reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case LISTAR_HAMBURGUESAS:
      return { ...state, hamburguesas: payload };
    case AGREGAR_CARRITO:
      return {
        ...state,
        carrito: [
          ...state.carrito,
          state.hamburguesas.filter((ite) => ite.id === parseInt(payload)),
        ],
      };
  }
}
