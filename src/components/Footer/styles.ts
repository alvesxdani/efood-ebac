import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledFooter = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
background-color: ${colors.secondary};
min-height: 298px;

.logo {
  margin-bottom: 32.5px;
}

.social-media {
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
}

p {
  width: 480px;
  text-align: center;
  font-size: 11px;
  color: ${colors.primary};
}
`