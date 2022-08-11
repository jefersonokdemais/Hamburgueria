import "./styles.css";
import { ThemeButton } from "../../styles/global";

import { useDispatch } from "react-redux";
import { addCartThunks, removeCartThunks } from "../../store/modules/cart/thunks";

export function Card({ produto, cart = false }) {

  const dispatch = useDispatch()
  const { nome, preco, imagem, id } = produto;

  function formataValor(num){
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num)
  }

  return cart ? (
    <div className="cart">
      <img src={imagem} alt={`imagem de ${nome}`} className="img-cart" />
      <div className="descricao-cart">
        <p>{nome}</p>
        <ThemeButton
          onClick={() => dispatch(removeCartThunks(id))}
          largura="70px"
          altura="30px"
        >
          Remover
        </ThemeButton>
      </div>
    </div>
  ) : (
    <div className="card">
      <img src={imagem} alt={`imagem de ${nome}`} className="img" />
      <div className="descricao">
        <h3>{nome}</h3>
        <h4>{formataValor(preco)}</h4>
        <ThemeButton
          onClick={() => dispatch(addCartThunks(produto))}
          largura="180px"
          altura="35px"
        >
          Comprar
        </ThemeButton>
      </div>
    </div>
  );
}

