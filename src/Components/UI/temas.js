import {
  lightMode,
  lightModeContent,
  textLightMode,
  darkMode,
  darkModeContent,
  textDarkMode
} from './Variaveis'

export const LightMode = {
  body: lightMode,
  content: lightModeContent,
  text: textLightMode
}

export const Darkmode = {
  body: darkMode,
  content: darkModeContent,
  text: textDarkMode,
  filter: 'invert(100)'
}