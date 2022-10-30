import React from "react";
import Titulo from "../Titulo";
import Conta from "../Conta";
import styled from 'styled-components'
import { fundoClaro } from '../UI/Variaveis'; 

const Container = styled.div`
  background-color: ${fundoClaro};
  min-height: 90vh;
  padding: 0px 15vw;
`
const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 32px;

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
      </Conteudo>
    </Container>
  );
};


