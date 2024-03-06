import { Box, Container, Grid, Typography } from "@mui/material"

const TestimonialsSection = () => {
  return <Container maxWidth='lg'>
    <Grid container padding={6} marginTop={10} marginBottom={10}>
      <Grid item sm={6} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box width={438}>
          <Box textAlign='center'>
            <Typography variant='h5' marginBottom={3}>What they say about us</Typography>
          </Box>
          <Box marginTop={4} marginBottom={4} textAlign='center'>
            <Box marginBottom='20px'>
              <img src='/assets/testimonials/testimonial-image.png' />
            </Box>
            <Box marginBottom='20px'>
              <img src='/assets/testimonials/rating.png' />
            </Box>
            <Typography variant='body2' component='h6' color='#737373' marginBottom='20px'>Slate helps you see how many more days you need to work to reach your financial goal.</Typography>
            <Box>
              <Typography variant='body2' component='h6' color='#23A6F0'>Regina Miles</Typography>
              <Typography variant='body2' component='h6'>Designer</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Box>
          <img src='/assets/testimonials/9-image-block.png' width='100%' />
        </Box>
      </Grid>
    </Grid>
  </Container>
}

export default TestimonialsSection