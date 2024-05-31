import { StyledHeader } from './styles'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo do Efood" />
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </StyledHeader>
  )
}

export default Header
