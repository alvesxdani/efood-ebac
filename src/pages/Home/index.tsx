import { useEffect, useState } from 'react'
import Card, { TCardProps } from '../../components/Card'
import { StyledContainerCard } from '../../styles/global'
import useData from '../../utils/useData'

const Home = () => {
  const { fetchData } = useData()
  const [data, setData] = useState<TCardProps[] | undefined>()

  useEffect(() => {
    const fetchAndSetData = async () => {
      const fetchedData = await fetchData()
      setData(fetchedData)
    }
    fetchAndSetData()
  }, [fetchData])

  return (
    <StyledContainerCard>
      {data &&
        data.map(
          ({ avaliacao, capa, descricao, titulo, destacado, tipo }, index) => (
            <Card
              id={index}
              capa={capa}
              avaliacao={avaliacao}
              titulo={titulo}
              descricao={descricao}
              destacado={destacado}
              tipo={tipo}
              key={index}
            />
          ),
        )}
    </StyledContainerCard>
  )
}

export default Home
