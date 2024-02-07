import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px var(--blueDark);
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

body {
  background-color: ${(props) => props.theme.gray600};
  color: ${(props) => props.theme.gray100};
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

.wrapper {
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;
}

@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
  
  .wrapper {
    grid-template-columns: 1fr;
  }
}
`
