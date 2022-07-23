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

.react-modal-overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius:0.25rem;
  }
  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }
  }


`

