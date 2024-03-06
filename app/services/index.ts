import axios from "axios";
import { Product, ProductListParams, ProductListResponse } from "../models";

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com'
})

export const getProductsAPI = () => {
  return async (params: ProductListParams) => {
    const { data } = await axiosInstance.get<ProductListResponse>('/products', { params })

    return {
      products: data.products,
      total: data.total
    }
  }
}

export const getSingleProductAPI = () => {
  return async (productId: number) => {
    const { data } = await axiosInstance.get<Product>(`/products/${productId}`)

    return data
  }
}