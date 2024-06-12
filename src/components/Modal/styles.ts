import styled from "styled-components";
import { colors } from "../../styles/colors";

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
  
  .close {
    display: flex;
    justify-content: flex-end;
    button {
      border: none;
      background-color: transparent;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  }

  .modal {
    width: 1024px;
    background-color: ${colors.primary};
    color: #fff;
    padding: 0.7rem;
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
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
      .image {
        width: 50%;
        overflow: hidden;
        object-fit: cover;
        width: 380px;
        height: 280px;
      }
      button {
        background-color: #fff;
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