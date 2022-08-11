import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Inter", sans-serif;
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    ol, ul, li{
        list-style: none;
    }
    body{
        background-color: var(--Branco);
        color: var(--Preto);
    }
    h1, h2, h3, h4, h5, h6, p, small{
        font-weight:700;
    }
    img{
        width: 100%
    }
    button{
        cursor:pointer;
    }
    form{
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 1rem;
    }   

    :root{
        --Button:#FF577F;
        --ButtonFocus: #FF427F;
        --Branco: #F5F5F2;
        --Cinza: #868E96;
        --Preto: #121214; 
        --Verde: #3FE864;
        --Vermelho: #E83F5B;
    }
`

export const Container = styled.div`
    width: 100%;
    height: ${(props) => props.altura};
    margin: 0 auto;
    max-width: ${(props) => props.largura};

    padding: ${(props) => props.padding};

    display: flex;
    flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
    justify-content: ${(props) => (props.justify ? props.justify : "center")};
    align-items: ${(props) => (props.align ? props.align : "center")};

    border: ${(props) => (props.borda ? props.borda : "")};
    border-radius: 4px;
    gap: 1.2rem;
    background: ${(props) => props.fundo};

    @media (max-width: 300px) {
        flex-direction: column;
    }
`
export const TitleH1 = styled.h1`
    font-size: 35px;
    color: var(--Branco);
`
export const TitleH2 = styled.h2`
    color: var(--Branco);
    color: ${(props) => props.color};
    font-size: ${(props) => (props.size ? props.size : "30")}px;
    margin: 10px;
`
export const ThemeButton = styled.button`
    height: ${props=> props.altura};
    width: ${props=> props.largura};

    border: none;
    background: var(--Button);
    color: var(--Branco);

    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: var(--Verde);
        color: black;
        font-weight: bold;
    }

`
export const Input = styled.input`
    background-color: var(--Branco);
    border:none;
    border-radius: 6px;

    width: calc(100% - 2.4rem);
    height: 38px;

    box-sizing: border-box;
    margin: 0 1rem;
    padding: 0 1rem;

    color: black;
`
export const Label = styled.label`
    width: ${(props) => props.largura ? props.largura : "calc(100% - 3rem);" };
    text-align: ${(props)=>{
        if (props.centralizar==="center"){
            return "center"
        }else{
            return props.centralizar}
    }};;

    font-size: 12px;
    font-weight: 300;
    color: ${(props)=>{
        if (props.cor==="1"){
            return "black"
        }else if(props.cor==="2"){
            return "red"
        }else{
            return "black"}
    }};
`

