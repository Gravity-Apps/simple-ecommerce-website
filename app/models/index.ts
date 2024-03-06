export interface Product {
  brand: string
  category: string
  description: string
  discountPercentage: number
  id: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}

export interface ProductListResponse {
  products: Product[]
  limit: number
  skip: number
  total: number
}

export interface ProductListParams {
  skip: number
  limit: number
}