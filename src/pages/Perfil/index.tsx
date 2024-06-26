// import { useParams } from 'react-router-dom'
import { useState } from 'react'
import CardPedido from '../../components/CardPedido'
import { StyledContainerCard } from '../../styles/global'
import { pizzas } from '../../utils/data2'
import { StyledHeaderPerfil } from './style'
import Modal from '../../components/Modal'
import pizzaPhoto from '../../assets/pizza.png'

const Perfil = () => {
  // const [data, setData] = useState<TCardProps | undefined>()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number>()
  // const { fetchData } = useData()
  // const { id } = useParams()

  // useEffect(() => {
  //   const fetchAndSetData = async () => {
  //     const fetchedData = await fetchData()
  //     setData(fetchedData[0])
  //     console.log(fetchedData[Number(id)])
  //   }
  //   fetchAndSetData()
  // }, [fetchData, id])

  function openMoodal(index: number | undefined) {
      setSelectedIndex(index)
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* {data && (
        <>
          <StyledHeaderPerfil>
            <span>{data.tipo}</span>
            <h2>{data.titulo}</h2>
          </StyledHeaderPerfil>
          <StyledContainerCard grid={3}>
            {data.cardapio?.map(
              ({ descricao, foto, nome, porcao, preco }, index) => (
                <>
                  <CardPedido
                    descricao={descricao}
                    foto={foto}
                    nome={nome}
                    onclick={() => openMoodal(index)}
                  />
                  {isOpen && selectedIndex === index && (
                    <Modal
                      descricao={descricao}
                      foto={foto}
                      nome={nome}
                      porcao={porcao}
                      preco={preco}
                      onclick={() => setIsOpen(!isOpen)}
                      key={nome}
                    />
                  )}
                </>
              ),
            )}
          </StyledContainerCard>
        </>
      )} */}
      <StyledHeaderPerfil>
        <div className="header-restaurant">
          <span>Italiana</span>
          <h2>La Dolce Vita Trattoria</h2>
        </div>
      </StyledHeaderPerfil>
      <StyledContainerCard grid={3}>
        {pizzas.map(({ nome, descricao }, index) => (
          <>
            <CardPedido
              descricao={descricao}
              nome={nome}
              foto={pizzaPhoto}
              onclick={() => openMoodal(index)}
            />
            {isOpen && selectedIndex === index && (
              <Modal
                descricao={descricao}
                foto={pizzaPhoto}
                nome={nome}
                onclick={() => setIsOpen(!isOpen)}
                porcao="de 2 a 3 pessoas"
                preco={60.9}
                key={index}
              />
            )}
          </>
        ))}
      </StyledContainerCard>
    </>
  )
}

export default Perfil
