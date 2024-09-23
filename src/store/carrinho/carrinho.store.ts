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
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  loading: false,
  isOpen: false,
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
        state.totalAmount -= item.price * item.quantity
        state.items = state.items.filter((pizza) => pizza.name !== itemName)
      }
    },
    clearCart(state) {
      state.items = []
      state.totalAmount = 0
    },
    setIsOpenCart(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
  },
})

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  setLoading,
  setIsOpenCart,
} = cartSlice.actions
export default cartSlice.reducer
