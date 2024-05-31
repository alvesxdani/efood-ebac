import Card from '../../components/Card'
import food1 from '../../assets/food1.png'
import food2 from '../../assets/food2.png'
import { StyledContainerCard } from './styles'
import { itens } from '../../utils/data'

const ContainerCards = () => {
  return (
    <StyledContainerCard>
      {itens.map(({name, rating, description, cuisine}, index) => (
        <Card name={name} rating={rating} description={description} image={index === 0 ? food1 : food2}/>
      ))}
    </StyledContainerCard>
  )
}

export default ContainerCards
