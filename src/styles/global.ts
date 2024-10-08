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

  h2 {
    font-size: 32px;
  }

  h3 {
    font-style: 18px;
  }
`

export const StyledContainerCard = styled.div<Props>`
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  margin: 2rem auto;
  padding-bottom: 120px;
  ${(props) =>
    props.grid === 2
      ? `grid-template-columns: 1fr 1fr; width: 1126px;`
      : `grid-template-columns: 1fr 1fr 1fr; width: 1090px; gap: 32px;`}
`
