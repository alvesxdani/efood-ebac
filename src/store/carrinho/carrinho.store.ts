// src/store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PizzaItem {
  name: string
  price: number
  quantity: number
  image: string
}

interface CartState {
  items: PizzaItem[]
  totalAmount: number
  loading: boolean
  isCartOpen: boolean
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  loading: false,
  isCartOpen: false,
}

// Slice do carrinho
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<PizzaItem>) {
      const item = action.payload
      const existingItem = state.items.find((pizza) => pizza.name === item.name)

      if (existingItem) {
        existingItem.quantity += item.quantity
      } else {
        state.items.push(item)
      }

      state.totalAmount += item.price * item.quantity
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      const itemName = action.payload
      const item = state.items.find((pizza) => pizza.name === itemName)

      if (item) {
        state.totalAmount -= item.price
        item.quantity -= 1
      }

      if (item?.quantity === 0) {
        state.items = state.items.filter((pizza) => pizza.name !== itemName)
      }
    },
    clearCart(state) {
      state.items = []
      state.totalAmount = 0
    },
    setIsOpenCart(state, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    resetOrder(state) {
      state.items = []
    }
  },
})

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  setLoading,
  setIsOpenCart,
  resetOrder
} = cartSlice.actions
export default cartSlice.reducer
