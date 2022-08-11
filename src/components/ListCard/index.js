import "./styles.css"

import { Card } from "../Card"
import { Header } from "../Header";

import { useSelector } from "react-redux";

export function ListCard(){

    const produtos = useSelector (({produtos})=> produtos)


    return (
        <>
            <Header/>
            <div className="grid">
                <div className="container_List">
                    {produtos.map((produto)=> <Card key={produto.id} produto={produto}/>)}
                </div>
            </div>
        </>
    )
}