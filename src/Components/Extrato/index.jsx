import React from "react";

import { Box, Botao } from "../UI/";
import { extratoLista } from "../../info";
import Items from "../Items";


const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({id, type, value, date, from}) => {
        return (
          <Items key={id} type={type} value={value} date={date} from={from}/>
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};

export default Extrato;
