import { MouseEventHandler } from 'react'
import { StyledCardPedido } from './styles'
import Button from '../Button'

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
      {/* <button onClick={onclick}>Mais detalhes</button> */}
      <Button onClick={onclick}>Mais detalhes</Button>
    </StyledCardPedido>
  )
}

export default CardPedido
