import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const StyledContainerCarrinho = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${colors.secondary};

  .modal {
    width: 360px;
    height: 100vh;
    padding: 32px 8px;
    background-color: ${colors.primary};
    display: flex;
    flex-direction: column;

    .container-order {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 40px;

      .order {
        background-color: ${colors.secondary};
        color: ${colors.primary};
        width: 344px;
        display: flex;
        gap: 8px;
        height: 100px;
        padding: 8px;

        .info-product {
          display: flex;
          flex-direction: column;
          width: 100%;

          h3 {
            margin-bottom: 16px;
          }

          p {
            margin-bottom: 9px;
          }

          .wastebasket {
            text-align: end;
            cursor: pointer;
          }
        }
      }

      .image-product {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }
    }

    .total-order {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;

      span {
        font-weight: 700;
        color: ${colors.secondary};
      }
    }

    .container-info, .container-payment, .container-finish {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      font-weight: 700;

      .title {
        font-size: 16px;
        margin-bottom: 16px;
      }

      .form {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        margin-bottom: 24px;

        .form-item, .form-item-column {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          label {
            font-size: 14px;
          }

          input {
            height: 32px;
            border: none;
            background-color: ${colors.secondary};
          }
        }

        .form-item-column {
          flex-direction: row;
          gap: 34px;
          overflow: hidden;
        }
      }

      .buttons {
        display: flex;
        flex-direction: column;
      }

      p {
        font-weight: normal;
        font-size: 14px;
        margin-bottom: 1.5rem;
      }
    }
  }
`
