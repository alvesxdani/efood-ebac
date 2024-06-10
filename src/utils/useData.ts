import { useCallback } from 'react'

const useData = () => {
  const fetchData = useCallback(async () => {
    const response = await fetch(
      'https://fake-api-tau.vercel.app/api/efood/restaurantes',
    ).then((resp) => resp.json())
    return response
  }, [])

  return { fetchData }
}

export default useData
