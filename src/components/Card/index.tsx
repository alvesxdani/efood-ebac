import { Link } from 'react-router-dom'
import star from '../../assets/star.png'
import { StyledCard } from './styles'

type Cardapio = {
  descricao: string
  foto: string
  nome: string
  porcao: string
  preco: number
}

export type TCardProps = {
  id: number
  titulo: string
  destacado?: boolean
  tipo?: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: Cardapio[]
}

const Card = ({
  titulo,
  avaliacao,
  capa,
  descricao,
  destacado,
  tipo,
  id,
}: TCardProps) => {
  return (
    <StyledCard>
      <div className="details">
        {destacado && <span>Destaque da semana</span>}
        <span>{tipo}</span>
      </div>
      <img src={capa} alt={titulo} className="image" />
      <div className="description">
        <div className="title">
          <h3>{titulo}</h3>
          <span>
            {avaliacao}
            <img src={star} alt="Estrela amarela" className="star" />
          </span>
        </div>
        <p>{descricao}</p>
      </div>
      <Link to={`/about/${id}`}>
        <button>Saiba mais</button>
      </Link>
    </StyledCard>
  )
}

export default Card
