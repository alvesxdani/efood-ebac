import styled from 'styled-components'
import imgHeader from '../../assets/header2.png'

export const StyledHeaderPerfil = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  background-image: url(${imgHeader});
  background-size: cover;
  width: 100%;
  height: 280px;
  color: #fff;
  background-blend-mode: darken;
  display: flex;
  justify-content: center;
  .header-restaurant {
    width: 1090px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 0.6rem;
  }
  span {
    font-size: 32px;
    font-weight: 100;
  }
`
