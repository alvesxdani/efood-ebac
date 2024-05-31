import CardPedido from "../../components/CardPedido"
import { pizzas } from "../../utils/data2"
import photoPizza from '../../assets/pizza.png'
import { StyledContainerCard } from "../../styles/global"

const Perfil = () => {
  return (
    <StyledContainerCard grid={3}>
      {pizzas.map(({nome, descricao}) => (
        <CardPedido name={nome} description={descricao} image={photoPizza} />
      ))}
    </StyledContainerCard>
  )
}

export default Perfil