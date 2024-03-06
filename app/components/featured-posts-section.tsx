import { Box, Container, Grid, Typography } from "@mui/material"

const FeaturedPostsSection = () => {
  return <Container maxWidth='lg' sx={{ marginTop: 14, marginBottom: 14 }}>
    <Box textAlign='center' marginBottom={10}>
      <Typography variant='body2' color='#23A6F0' marginBottom={1.5}>Practice Advice</Typography>
      <Typography variant='h4'>Featured Posts</Typography>
    </Box>
    <Grid container spacing={1}>
      <Grid item sm={4} xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src='/assets/posts/featured-post-1.png' width='100%' />
        </Box>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Box>
          <img src='/assets/posts/featured-post-2.png' width='100%' />
        </Box>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Box>
          <img src='/assets/posts/featured-post-3.png' width='100%' />
        </Box>
      </Grid>
    </Grid>
  </Container>
}

export default FeaturedPostsSection