import { Product } from "@/app/models";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IProductsSlice {
  list: Product[]
  selected?: Product
}

const initialState: IProductsSlice = { list: [] }

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    populate(state, action: PayloadAction<Product[]>) {
      state.list = action.payload
    },
    setSelectedProduct(state, action: PayloadAction<Product>) {
      state.selected = action.payload
    }
  }
})

export const { populate, setSelectedProduct } = productsSlice.actions
export default productsSlice.reducer