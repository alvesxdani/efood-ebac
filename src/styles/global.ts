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
border: 1px solid #000;
  margin: 2rem auto;
  display: grid;
  justify-items: center;
  align-content: center;
  justify-content: center;
  ${(props) =>
    props.grid === 2
      ? `grid-template-columns: 1fr 1fr; width: 59%; gap: 48px;`
      : `grid-template-columns: 1fr 1fr 1fr; width: 60%; gap: 32px;`}
`
