import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const StyledModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes toTup {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0%);
    }
  }
  animation: toTup 0.8s ease-in forwards;
  .modal {
    width: 1024px;
    background-color: ${colors.primary};
    color: #fff;
    padding: 2rem;
    position: relative;

    .close {
      position: absolute;
      right: 10px;
      top: 8px;

      button {
        border: none;
        background-color: transparent;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
      }
    }

    .produto {
      display: flex;
      gap: 1rem;

      .info {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 0.8rem;
        h2 {
          font-size: 18px;
        }
        p {
          font-size: 14px;
        }
      }
      .image img {
        overflow: hidden;
        width: 280px;
        height: 280px;
        object-fit: cover;
      }
      button {
        background-color: #ffebd9;
        color: ${colors.primary};
        border: none;
        cursor: pointer;
        padding: 0.2rem;
        font-weight: bold;
        width: auto;
      }
    }
  }
`
