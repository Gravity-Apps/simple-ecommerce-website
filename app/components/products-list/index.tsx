'use client'

import { getProductsAPI } from "@/app/services"
import { IProductsSlice, populate } from "@/lib/features/products/productsSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useEffect, useState } from "react"
import ProductItem from "./product-item"
import { Box, Button, Grid } from "@mui/material"

import './index.scss'

interface ILimitSkip {
  limit: number
  skip: number
}

interface IProductsList {
  includePagination?: boolean
}

const ProductsList: React.FC<IProductsList> = ({ includePagination }) => {
  const getProducts = getProductsAPI()
  const dispatch = useAppDispatch()
  const products = useAppSelector<IProductsSlice>((state) => state.products)
  const [limitSkip, setLimitSkip] = useState<ILimitSkip>({ limit: 10, skip: 0 })
  const [totalItems, setTotalItems] = useState<number>(0)

  const loadData = async () => {
    const response = await getProducts(limitSkip)
    setTotalItems(response.total)
    dispatch(populate(response.products))
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleLoadMore = async () => {
    const updatedLimits = {
      limit: limitSkip.limit,
      skip: limitSkip.skip + 10
    }
    setLimitSkip(updatedLimits)
    const response = await getProducts(updatedLimits)
    const updatedList = [
      ...products.list,
      ...response.products
    ]
    dispatch(populate(updatedList))
    setTotalItems(response.total)
  }

  return <Box>
    <Grid container id='products-list' padding={3}>
      {
        products.list.map((product, key) => (
          <Grid item key={`${key}--${product.id}--${product.title}`} sm={12 / 5} xs={12} display='flex' justifyContent='center'>
            <ProductItem product={product} />
          </Grid>
        ))
      }
    </Grid>
    {
      (products.list.length !== totalItems && includePagination) &&
      <Box textAlign='center'>
        <Button
          className='load-more-bttn'
          variant='outlined'
          onClick={handleLoadMore}
        >LOAD MORE PRODUCTS</Button>
      </Box>
    }
  </Box >
}

export default ProductsList