// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import useData from '../../composables/useData'
import { StyledContainerCard } from '../../styles/global'
import Card, { TCardProps } from '../../components/Card'

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
    <StyledContainerCard grid={2}>
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
