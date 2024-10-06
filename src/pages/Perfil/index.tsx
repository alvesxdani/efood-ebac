import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TCardProps } from '../../components/Card'
import CardPedido from '../../components/CardPedido'
import Carrinho from '../../components/Carrinho'
import Modal from '../../components/Modal'
import useData from '../../composables/useData'
import { useAppSelector } from '../../store/hooks'
import { StyledContainerCard } from '../../styles/global'
import { StyledHeaderPerfil } from './style'

const Perfil = () => {
  const [data, setData] = useState<TCardProps | undefined>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number>()
  const isCartOpen = useAppSelector((state) => state.cart.isOpen)
  const { fetchData } = useData()
  const { id } = useParams()

  useEffect(() => {
    const fetchAndSetData = async () => {
      const fetchedData = await fetchData()
      setData(fetchedData[Number(id)])
    }
    fetchAndSetData()
  }, [fetchData, id])

  function openMoodal(index: number | undefined) {
    setSelectedIndex(index)
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      {data && (
        <>
          <StyledHeaderPerfil>
            <div className="header-restaurant">
              <span>{data.tipo}</span>
              <h2>{data.titulo}</h2>
            </div>
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
                  {isModalOpen && selectedIndex === index && (
                    <Modal
                      descricao={descricao}
                      foto={foto}
                      nome={nome}
                      porcao={porcao}
                      preco={preco}
                      onclick={() => setIsModalOpen(!isModalOpen)}
                      key={nome}
                    />
                  )}
                </>
              ),
            )}
          </StyledContainerCard>
        </>
      )}
      {isCartOpen && <Carrinho />}
    </>
  )
}

export default Perfil
