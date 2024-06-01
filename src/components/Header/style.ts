import styled from 'styled-components'
import { colors } from '../../styles/colors'
import image from '../../assets/fundo-header.png'

type Props = {
  type: 'home' | 'perfil'
}

export const StyledHeader = styled.header<Props>`
  width: 100%;
  background-image: url(${image});
  display: flex;
  gap: 139px;
  ${(props) =>
    props.type === 'home' &&
    `
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 384px;
    `}
  ${(props) =>
    props.type === 'perfil' &&
    `
    justify-content: center;
    align-items: center;
    height: 186px;
    span {
      font-weight: bold;
      color: ${colors.primary};
    }
    `}

  h1 {
    color: ${colors.primary};
    width: 50%;
    text-align: center;
  }
`
