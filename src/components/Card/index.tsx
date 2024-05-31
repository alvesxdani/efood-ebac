import { StyledCard } from './styles'
import star from '../../assets/star.png'

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
            <img src={star} alt="Estrela amarela" className='star'/>
          </span>
        </div>
        <p>{description}</p>
      </div>
      <button>Saiba mais</button>
    </StyledCard>
  )
}

export default Card
