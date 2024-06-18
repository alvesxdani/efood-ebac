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
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  margin: 2rem auto;
  ${(props) =>
    props.grid === 2
      ? `grid-template-columns: 1fr 1fr; width: 1126px;`
      : `grid-template-columns: 1fr 1fr 1fr;`}
`
