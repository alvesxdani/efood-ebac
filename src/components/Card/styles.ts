import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 472px;
  position: relative;
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
  margin-right: 80px;
  margin-bottom: 48px;

  .details {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    display: flex;
    gap: 0.5rem;
    span {
      background-color: ${colors.primary};
      color: #fff;
      padding: 0.3rem;
    }
  }

  img {
    height: 100%;
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
  
  a {
    text-decoration: none;
  }
`
