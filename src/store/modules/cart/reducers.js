import { CART_ADD, CART_REMOVE } from "./actionTypes";

const cartReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  switch (action.type) {
    case CART_ADD:
      const { produto } = action;
      return [...state, produto];

    case CART_REMOVE:
      const { novaLista } = action;
      return novaLista;

    default:
      return state;
  }
};

export default cartReducer;
