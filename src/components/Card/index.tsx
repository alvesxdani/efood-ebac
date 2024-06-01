import { StyledCard } from './styles'
import star from '../../assets/star.png'
import { Link } from 'react-router-dom'

type Props = {
  image: string
  name: string
  rating: number
  description: string
}

const Card = ({ image, name, rating, description}: Props) => {
  return (
    <StyledCard>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="description">
        <div className="title">
          <h3>{name}</h3>
          <span>
            {rating}
            <img src={star} alt="Estrela amarela" className="star" />
          </span>
        </div>
        <p>{description}</p>
      </div>
      <Link to="/about">
        <button>Saiba mais</button>
      </Link>
    </StyledCard>
  )
}

export default Card
