import "./styles.css";
import {Login} from "../Login"

import { TitleH2 } from "../../styles/global";

import {BiCartAlt} from "react-icons/bi"
import {FiLogIn} from "react-icons/fi"

import { useState } from "react";

export function Header() {

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div className="header">
      <div className="container">
        <TitleH2>Kenzie Shop <strong>Gamer</strong></TitleH2>
        <div className="right">
          <button className="but"><BiCartAlt/> Carrinho</button >
          <button onClick={()=> setOpen(true)} className="but"><FiLogIn/> Entrar</button >
        </div>
        <Login open={open} handleClose={handleClose} />
      </div>
    </div>
  );
}
