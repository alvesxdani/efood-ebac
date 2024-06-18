import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const StyledCardPedido = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  border: 1px solid ${colors.primary};
  justify-content: space-between;
  align-items: center;
  width: 320px;
  background-color: ${colors.primary};
  padding: 0.5rem;

  img {
    width: 310px;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .title {
    display: flex;
    justify-content: space-between;
  }

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 0.2rem;
    margin: 0.3rem;
    background-color: #ffebd9;
    color: ${colors.primary};
    border: none;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }
`
