'use client'

import { Product } from "@/app/models"
import { formatter } from "@/app/utils/currency-utils"
import { setSelectedProduct } from "@/lib/features/products/productsSlice"
import { useAppDispatch } from "@/lib/hooks"
import { Box, Typography } from "@mui/material"
import { redirect, useRouter } from "next/navigation"

interface IProductItem {
  product: Product
}

const ProductItem: React.FC<IProductItem> = ({ product }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  
  const calculatedDiscount = formatter.format(product.price * (product.discountPercentage / 100))

  const handleClick = () => {
    dispatch(setSelectedProduct(product))
    router.push(`/products/${product.id}`)
  }

  return <Box className='product-item' onClick={handleClick}>
    <Box>
      <img src={product.thumbnail} width={183} height={238} />
    </Box>
    <Box className="description-box">
      <Typography variant='body1' component='h5' color='#252B42'>{product.brand}</Typography>
      <Typography variant='body2' component='h5' color='#737373'>{product.title}</Typography>
      <Box className="price-box">
        <Typography variant='body1' component='h5' color='#BDBDBD'>{formatter.format(product.price)}</Typography>
        <Typography variant='body1' component='h5' color='#23856D'>{calculatedDiscount}</Typography>
      </Box>
    </Box>
  </Box>
}

export default ProductItem