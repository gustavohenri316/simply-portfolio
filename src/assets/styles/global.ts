import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --text: ${props => props.theme.colors.text};
  --title: ${props => props.theme.colors.title};
  --background: ${props => props.theme.colors.background};
  --primary: ${props => props.theme.colors.primary};
  --yellow: ${props => props.theme.colors.yellow};
 
}

@media (max-widht: 1080px){
  html {
    font-size: 93.75%;
  }
}

@media (max-widht: 720px){
  html {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  color: var(--primary);
}
body, input, textarea, select, button {
  font: 400 1rem "Poppins", sans-serif;
}
button{
  cursor: pointer;
}

a{
  color: inherit;
  text-decoration: none;
}

`

