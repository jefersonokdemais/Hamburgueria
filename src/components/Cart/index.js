import { ThemeButton } from "../../styles/global";
import "./styles.css";

import { useSelector } from "react-redux/es/exports";
import { Card } from "../Card";


export function Cart(){
    
    const cart = useSelector(({cart})=> cart)

    const qtdProdutosCart = cart.length
    const soma = cart.reduce((previous, produto)=> previous + produto.preco, 0);
    const somaFormatada = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(soma);

    return (
        <div className="cart-container">
            <h3>Resumo do Pedido</h3>
            {cart.map(produto=> <Card key={produto.id} produto={produto} cart/>)}
            <div className="body-cart">
                <p>{qtdProdutosCart} Produtos</p>
                <p>Valor: {somaFormatada}</p>
            </div>
            <ThemeButton largura="100%" altura="40px">Finalizar o Pedido</ThemeButton>
        </div>
    )
}