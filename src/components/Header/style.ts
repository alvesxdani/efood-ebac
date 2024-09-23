import styled from 'styled-components'
import image from '../../assets/fundo-header.png'
import { colors } from '../../styles/colors'

type Props = {
  type: 'home' | 'perfil'
}

export const StyledHeader = styled.header<Props>`
  width: 100%;
  background-image: url(${image});
  display: flex;
  ${(props) =>
    props.type === 'home' &&
    `
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 384px;
    gap: 139px;
    `}
  ${(props) =>
    props.type === 'perfil' &&
    `
    justify-content: center;
    align-items: center;
    height: 186px;
    a {
    font-size: 18px;
    }
    .logo {
    margin-left: 341px;
    margin-right: 193px;
    }
    `}

  h1 {
    color: ${colors.primary};
    text-align: center;
    width: 539px;
    font-size: 31px;
  }

  a,
  button {
    text-decoration: none;
    font-weight: bold;
    color: ${colors.primary};
  }

  button {
    background: none;
    border: none;
    font-size: inherit;
    cursor: pointer;
  }
`
