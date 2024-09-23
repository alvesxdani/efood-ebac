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
  }
`
