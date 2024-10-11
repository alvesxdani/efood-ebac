export type Order = {
  products: {
    id: number
    price: number
  }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number | undefined
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number | undefined
      expires: {
        month: number | undefined
        year: number | undefined
      }
    }
  }
}
