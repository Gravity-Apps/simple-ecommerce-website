import { Container, Stack, Typography } from "@mui/material"
import ProductsList from "./products-list"

const ProductListSection = () => {
  return <Container maxWidth='lg' sx={{ marginBottom: 10 }}>
    <Stack direction='column' spacing={1.5} textAlign='center' marginBottom={3}>
      <Typography variant='h6' fontWeight={400} color='#737373'>Featured Products</Typography>
      <Typography variant='h5'>BESTSELLER PRODUCTS</Typography>
      <Typography variant='body2' component='h6' fontWeight={400} color='#737373'>Problems trying to resolve the conflict between</Typography>
    </Stack>
    <ProductsList includePagination />
  </Container>
}

export default ProductListSection