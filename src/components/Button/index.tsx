import { ButtonHTMLAttributes } from "react"
import { StyledButton } from "./styles"

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({onClick, children}: Props) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

export default Button