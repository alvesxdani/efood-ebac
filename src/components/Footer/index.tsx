import { StyledFooter } from './styles'
import fbIcon from '../../assets/fb-icon.png'
import igIcon from '../../assets/ig-icon.png'
import logo from '../../assets/logo.png'
import xIcon from '../../assets/x-icon.png'

const Footer = () => {
  return (
    <StyledFooter>
      <img src={logo} alt="Logo E-Food" className="logo" />

      <div className="social-media">
        <img src={igIcon} alt="Ícone do Instagram" />
        <img src={fbIcon} alt="Ícone do Facebook" />
        <img src={xIcon} alt="Ícone do Twitter" />
      </div>

      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </StyledFooter>
  )
}

export default Footer
