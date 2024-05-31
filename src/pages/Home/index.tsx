import Card from '../../components/Card'
import food1 from '../../assets/food1.png'
import food2 from '../../assets/food2.png'
import { itens } from '../../utils/data'
import { StyledContainerCard } from '../../styles/global'

const Home = () => {
  return (
    <StyledContainerCard grid={2}>
      {itens.map(({ name, rating, description }, index) => (
        <Card
          name={name}
          rating={rating}
          description={description}
          image={index === 0 ? food1 : food2}
        />
      ))}
    </StyledContainerCard>
  )
}

export default Home
