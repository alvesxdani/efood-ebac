import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
  max-width: 472px;

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

  .star {
    height: 15px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    padding: 0.2rem 0.2rem;
    margin: 0.3rem;
    background-color: ${colors.primary};
    border: none;
    color: #fff;
    cursor: pointer;
  }
`
