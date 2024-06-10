import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: #222;
  }

  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
  }
`

export const StyledContainerCard = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  justify-items: center;
  gap: 1rem;
  /* display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  gap: 0.8rem; */
`
