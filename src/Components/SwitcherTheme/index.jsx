import React from "react";
import ThemeOn from '../../assets/images/themeOn.svg'
import ThemeOff from '../../assets/images/themeOff.svg'
import { Icone } from "../UI";

const light = <Icone src={ThemeOn} alt='Tema Claro' />
const dark = <Icone src={ThemeOff} alt='Tema Escuro' />

export default (({ theme }) => (theme ? dark : light));