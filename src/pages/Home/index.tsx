// import { useEffect, useState } from 'react'
import { StyledContainerCard } from '../../styles/global'
import { itens } from '../../utils/data'
import food1 from '../../assets/food1.png'
import food2 from '../../assets/food2.png'
import Card from '../../components/Card'
// import useData from '../../utils/useData'
// import Card, { TCardProps } from '../../components/Card'

const Home = () => {
  // const { fetchData } = useData()
  // const [data, setData] = useState<TCardProps[] | undefined>()

  // useEffect(() => {
  //   const fetchAndSetData = async () => {
  //     const fetchedData = await fetchData()
  //     setData(fetchedData)
  //   }
  //   fetchAndSetData()
  // }, [fetchData])

  return (
    <StyledContainerCard grid={2}>
      {/* {data &&
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
        )} */}
        {itens.map(({cuisine,description, name, rating}, index) => (
          <Card
            id={index}
            avaliacao={rating}
            capa={index <= 0 ? food1 : food2}
            descricao={description}
            titulo={name}
            destacado={index <= 0 ? true : false}
            key={index}
            tipo={cuisine}
          />
        ))}
    </StyledContainerCard>
  )
}

export default Home
