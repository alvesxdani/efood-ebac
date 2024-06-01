import styled from "styled-components";
import imgHeader from '../../assets/header2.png'

export const StyledHeaderPerfil = styled.div`
  background-color: rgba(0,0,0,0.6);
  background-image: url(${imgHeader});
  background-size: cover;
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  padding: 2rem 8rem;
  justify-content: space-between;
  color: #fff;
  background-blend-mode: darken;
`