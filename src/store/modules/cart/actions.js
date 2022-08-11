import { CART_ADD, CART_REMOVE} from "./actionTypes";

export const addCart = (produto) => ({
  type: CART_ADD,
  produto,
});

export const removeCart = (novaLista) => ({
  type: CART_REMOVE,
  novaLista,
});
