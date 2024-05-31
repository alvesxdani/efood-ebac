import { StyledCardPedido } from './styles'

type Props = {
  image: string
  name: string
  description: string
}

const CardPedido = ({ image, name, description }: Props) => {
  return (
    <StyledCardPedido>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="description">
        <div className="title">
          <h3>{name}</h3>
        </div>
        <p>{description}</p>
      </div>
      <button>Adicionar ao carrinho</button>
    </StyledCardPedido>
  )
}

export default CardPedido
