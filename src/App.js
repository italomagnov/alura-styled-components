import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { LightMode, Darkmode } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeButton } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme";

function App() {

  const [tema, setTema] = useState(true);

  const ToggleTheme = () => {
    setTema((tema) => !tema);
  }

  return (
    <ThemeProvider theme={tema ? LightMode : Darkmode}>
      <GlobalStyle />
      <ThemeButton onClick={ToggleTheme}>
        <SwitcherTheme theme={tema}/>
      </ThemeButton>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
