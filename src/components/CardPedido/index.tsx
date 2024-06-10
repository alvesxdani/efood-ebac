import { MouseEventHandler } from 'react'
import { StyledCardPedido } from './styles'

type Props = {
  descricao: string
  foto: string
  nome: string
  porcao?: string
  preco?: number
  onclick: MouseEventHandler<HTMLButtonElement> | undefined
}

const CardPedido = ({ descricao, foto, nome, onclick }: Props) => {
  return (
    <StyledCardPedido>
      <div className="image">
        <img src={foto} alt={nome} />
      </div>
      <div className="description">
        <div className="title">
          <h3>{nome}</h3>
        </div>
        <p>{descricao}</p>
      </div>
      <button onClick={onclick}>Mais detalhes</button>
    </StyledCardPedido>
  )
}

export default CardPedido
