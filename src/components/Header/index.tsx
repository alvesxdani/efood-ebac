import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { StyledHeader } from './style'

type Props = {
  type: 'home' | 'perfil'
}

const Header = ({ type }: Props) => {
  return (
    <>
        {type === 'home' && (
          <StyledHeader type='home'>
            <img src={logo} alt="Logo do Efood" />
            <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
          </StyledHeader>
        )}
        {type === 'perfil' && (
          <StyledHeader type='perfil'>
            <Link to="/">Restaurantes</Link>
            <img src={logo} alt="Logo do Efood" />
            <span>0 produto(s) no carrinho</span>
          </StyledHeader>
        )}
    </>
  )
}

export default Header
