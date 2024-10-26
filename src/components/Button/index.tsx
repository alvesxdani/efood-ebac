import { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ onClick, children, disabled }: Props) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}

export default Button
