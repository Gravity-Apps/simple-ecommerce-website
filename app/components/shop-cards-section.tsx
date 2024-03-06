import { Box, Container, Grid } from "@mui/material"
import FurnitureItem from "./furniture-item"

const ShopCardsSection = () => {
  return <Container maxWidth='lg'>
    <Box paddingTop={10} paddingBottom={10}>
      <Grid container spacing={2}>
        <Grid item sm={5} xs={12}>
          <FurnitureItem src={`/assets/header/header-furniture-1.png`} alt='header-furniture-1' largeFont />
        </Grid>
        <Grid container item spacing={2} sm={7} xs={12}>
          <Grid item xs={12}>
            <FurnitureItem src={`/assets/header/header-furniture-2.png`} alt='header-furniture-2' />
          </Grid>
          <Grid item sm={6} xs={12}>
            <FurnitureItem src={`/assets/header/header-furniture-3.png`} alt='header-furniture-3' />
          </Grid>
          <Grid item sm={6} xs={12}>
            <FurnitureItem src={`/assets/header/header-furniture-4.png`} alt='header-furniture-4' />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </Container>
}

export default ShopCardsSection