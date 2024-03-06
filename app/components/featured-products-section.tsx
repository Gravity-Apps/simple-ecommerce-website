import { Box, Container, Grid, Stack, Typography } from "@mui/material"

interface IFeaturedProductItem {
  imgSrc: string
  title: string
  desc: string
}

const FEATURED_PRODUCTS = [
  {
    imgSrc: '/assets/features/service-icon-1.png',
    title: 'Easy Wins',
    desc: 'Get your best looking smile now!'
  },
  {
    imgSrc: '/assets/features/service-icon-2.png',
    title: 'Concrete',
    desc: 'Defalcate is most focused in helping you discover your most beautiful smile'
  },
  {
    imgSrc: '/assets/features/service-icon-3.png',
    title: 'Hack Growth',
    desc: 'Overcame any hurdle or any other problem.'
  },
]

const FeaturedProductItem: React.FC<IFeaturedProductItem> = ({ imgSrc, title, desc }) => {
  return <Stack justifyContent='center' width='328px' direction='column' spacing={3} alignItems='center'>
    <Box textAlign='center' width='100%'>
      <Box>
        <img src={imgSrc} alt={title} />
      </Box>
      <Typography variant='h5'>{title}</Typography>
      <Box display='flex' justifyContent='center'>
        <Typography variant='body2' fontWeight={400} color='#737373' width={225}>{desc}</Typography>
      </Box>
    </Box>
  </Stack>
}

const FeatureProductsSection = () => {
  return <Container maxWidth='md' sx={{ marginBottom: (theme) => theme.spacing(10) }}>
    <Box paddingTop={10} paddingBottom={10}>
      <Stack direction='column' spacing={1.5} textAlign='center' marginBottom={3}>
        <Typography variant='h6' fontWeight={400} color='#737373'>Featured Products</Typography>
        <Typography variant='h5'>THE BEST SERVICES</Typography>
        <Typography variant='body2' component='h6' fontWeight={400} color='#737373'>Problems trying to resolve the conflict between</Typography>
      </Stack>
    </Box>
    <Grid container spacing={4}>
      {
        FEATURED_PRODUCTS.map(featured => (
          <Grid item sm={4} xs={12} display='flex' justifyContent='center' alignItems='center'>
            <FeaturedProductItem {...featured} />
          </Grid>
        ))
      }
    </Grid>
  </Container>
}

export default FeatureProductsSection