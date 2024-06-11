import styled, { createGlobalStyle } from 'styled-components'

type Props = {
  grid: number
}

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

export const StyledContainerCard = styled.div<Props>`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  ${(props) =>
    props.grid === 2
      ? `grid-template-columns: 1fr 1fr;`
      : `grid-template-columns: 1fr 1fr 1fr;`}
  justify-content: center;
  justify-items: center;
  gap: 1rem;
`
