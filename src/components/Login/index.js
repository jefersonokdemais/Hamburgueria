import Modal from '@mui/material/Modal';
import {Container, TitleH2, ThemeButton, Label, Input} from "../../styles/global"

import { useState } from 'react';
import { useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "./styles.css"

export function Login({handleClose, open}) {
  const [dataLogin, setDataLogin] = useState({})

  const formSchema = yup.object().shape({
    nome: yup
        .string()
        .required("Nome obrigatório"),
    senha: yup
    .string()
    .required("Senha obrigatória")
  })

  const { register, handleSubmit, formState:{errors}}= useForm({
    resolver: yupResolver(formSchema)
  });
  
  const upSubmit = (data) => {
    localStorage.setItem("@user", data.nome)
    localStorage.setItem("@senha", data.senha)
    setDataLogin({})
    handleClose()

  }

  return (  
      <Modal open={open} onClose={handleClose} >
        <Container altura="300px" largura="275px" className='modal'>
          <TitleH2 color="black" size={22}>
            Login
          </TitleH2>
          <form onSubmit={handleSubmit(upSubmit)}>
            {errors.nome ? (
              <Label cor="2">{errors.nome.message}</Label>
            ):(
              <Label>Nome</Label>
            )}
            <Input 
              placeholder="Nome" 
              {...register("nome")}
              value={dataLogin.nome}
              onChange={(e)=> setDataLogin({...dataLogin, nome: e.target.value})}/>

            {errors.senha ? (
              <Label cor="2">{errors.senha.message}</Label>
            ):(
              <Label>Senha</Label>
            )}
            <Input 
              placeholder="senha"
              {...register("senha")} 
              type="password"
              value={dataLogin.senha}
              onChange={(e)=> setDataLogin({...dataLogin, senha: e.target.value})}
              />
            <ThemeButton altura="40px" largura="80%"type="submit">Entrar</ThemeButton>
          </form>
        </Container>
      </Modal>
  );
}
