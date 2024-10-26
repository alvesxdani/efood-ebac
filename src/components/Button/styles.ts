import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: 0.3rem;
  background-color: #ffebd9;
  color: ${colors.primary};
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:disabled {
    filter: grayscale(90%);
    cursor: no-drop;
  }
`
