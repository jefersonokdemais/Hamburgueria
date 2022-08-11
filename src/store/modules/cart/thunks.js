import { addCart, removeCart } from "./actions";
  
export const addCartThunks = (produto) => {
    return(dispatch) =>{
        const cartList = JSON.parse(localStorage.getItem("cart")) || [];
        cartList.push(produto);

        localStorage.setItem("cart", JSON.stringify(cartList));

        dispatch(addCart(produto));
    }
}

export const removeCartThunks = (id) => (dispatch, getStore) => {
    const {cart} = getStore()
    
    const novaLista = cart.filter((produto) => produto.id !== id);
    
    localStorage.setItem("cart", JSON.stringify(novaLista))
    
    dispatch(removeCart(novaLista))
}