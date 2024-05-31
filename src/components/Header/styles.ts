import styled from 'styled-components'
import image from '../../assets/fundo-header.png'
import { colors } from '../../styles/colors'

export const StyledHeader = styled.header`
  width: 100%;
  height: 384px;
  background-image: url(${image});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 139px;

  h1 {
    color: ${colors.primary};
    width: 50%;
    text-align: center;
  }
`
