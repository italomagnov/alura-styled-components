import React from "react";
import Titulo from "../Titulo";
import Conta from "../Conta";
import styled from 'styled-components'
import { fundoClaro } from '../UI/Variaveis'; 
import Extrato from "../Extrato";

const Container = styled.div`
  background-color: ${fundoClaro};
  min-height: 90vh;
  padding: 0px 15vw;
`
const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export default () => {
  return (
    <Container>
      <Titulo>Olá Rory</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};


