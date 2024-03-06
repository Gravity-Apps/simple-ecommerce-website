'use client'

import CustomBreadcrumbs from '@/app/components/breadcrumbs'
import { getSingleProductAPI } from '@/app/services'
import { setSelectedProduct } from '@/lib/features/products/productsSlice'
import { useAppSelector } from '@/lib/hooks'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './index.scss';
import { formatter } from '@/app/utils/currency-utils'

interface IProductDetailParams {
  id: string
}

interface IProductDetails {
  params: IProductDetailParams
}

const ProductDetails: React.FC<IProductDetails> = ({ params }) => {
  const getSingleProduct = getSingleProductAPI()
  const dispatch = useDispatch()
  const selectedProduct = useAppSelector((state) => state.products.selected)

  const loadData = async () => {
    const productResponse = await getSingleProduct(parseInt(params.id))
    dispatch(setSelectedProduct(productResponse))
  }

  useEffect(() => {
    loadData()
  }, [])

  return <Box>
    <div>The ID is: {params.id} </div>
    <Box sx={{ backgroundColor: '#FAFAFA' }}>
      <Box paddingTop={3} paddingBottom={3}>
        <Container maxWidth='lg'>
          <CustomBreadcrumbs />
        </Container>
      </Box>
      <Box>
        <Container maxWidth='lg'>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box id='item-images-section'>
                <Box id='image-display'>
                  <img src={selectedProduct?.images[0]} />
                </Box>
                <Stack direction='row' spacing={2}>
                  {
                    selectedProduct?.images.slice(1, selectedProduct?.images.length).map((image, key) => <Box key={`prdct-img--${key}`} className='next-images'><img src={image} /></Box>)
                  }
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography variant='h6' fontWeight={400}>{selectedProduct?.title ?? ''}</Typography>
                <Typography variant='h5'>{formatter.format(selectedProduct?.price ?? 0)}</Typography>
                <Box>
                  <Typography variant='caption'>Availability  :</Typography>
                  {
                    (selectedProduct?.stock && selectedProduct?.stock > 1) ?
                      <Typography variant='caption' color='#23A6F0'>In Stock</Typography>
                      :
                      <Typography variant='caption' color='#ff0000'>Out of Stock</Typography>
                  }
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  </Box>
}

export default ProductDetails