import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TCardProps } from '../../components/Card'
import CardPedido from '../../components/CardPedido'
import Modal from '../../components/Modal'
import { StyledContainerCard } from '../../styles/global'
import useData from '../../utils/useData'
import { StyledHeaderPerfil } from './style'

const Perfil = () => {
  const [data, setData] = useState<TCardProps | undefined>()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number>()
  const { fetchData } = useData()
  const { id } = useParams()

  useEffect(() => {
    const fetchAndSetData = async () => {
      const fetchedData = await fetchData()
      setData(fetchedData[0])
      console.log(fetchedData[Number(id)])
    }
    fetchAndSetData()
  }, [fetchData, id])

  function openMoodal(index: number | undefined) {
      setSelectedIndex(index)
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* {data && (
        <>
          <StyledHeaderPerfil>
            <span>Italiana</span>
            <h2>La Dolce Vita Trattoria</h2>
          </StyledHeaderPerfil>
          <StyledContainerCard grid={3}>
          </StyledContainerCard>
        </>
      )} */}
      {data && (
        <>
          <StyledHeaderPerfil>
            <span>{data.tipo}</span>
            <h2>{data.titulo}</h2>
          </StyledHeaderPerfil>
          <StyledContainerCard>
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
      )}
    </>
  )
}

export default Perfil
