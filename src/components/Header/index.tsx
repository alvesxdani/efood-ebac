import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { setIsOpenCart } from '../../store/carrinho/carrinho.store'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { StyledHeader } from './style'

type Props = {
  type: 'home' | 'perfil'
}

const Header = ({ type }: Props) => {
  const { isCartOpen, items } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  function handleCart() {
    dispatch(setIsOpenCart(!isCartOpen))
  }

  return (
    <>
      {type === 'home' && (
        <StyledHeader type="home">
          <img src={logo} alt="Logo do Efood" />
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </StyledHeader>
      )}
      {type === 'perfil' && (
        <StyledHeader type="perfil">
          <Link to="/">Restaurantes</Link>
          <img src={logo} alt="Logo do Efood" className="logo" width={165} />
          <button onClick={handleCart}>
            {items?.length} produto(s) no carrinho
          </button>
        </StyledHeader>
      )}
    </>
  )
}

export default Header
