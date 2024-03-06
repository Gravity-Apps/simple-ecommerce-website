import { Box, Container, Grid, Typography } from "@mui/material"

import './index.scss'

const Footer: React.FC = () => {
  return <footer>
    <Box id='footer-section-1'>
      <Container maxWidth='lg'>
        <Box className='footer-section-1-content'>
          <Box>
            <img src='/assets/header/navbar-brand.png' />
          </Box>
          <Box className='footer-socials'>
            <img src='/assets/footer/footer-social-media.png' />
          </Box>
        </Box>
      </Container>
    </Box>
    <Box sx={{ backgroundColor: '#FFFFFF' }}>
      <Container maxWidth='lg'>
        <Grid container paddingTop={6} paddingBottom={6}>
          <Grid item sm={2} xs={12}>
            <Typography variant='body1' component='p'>Company Info</Typography>
            <ul>
              <li><Typography variant='body2' component='p'>About Us</Typography></li>
              <li><Typography variant='body2' component='p'>Carrier</Typography></li>
              <li><Typography variant='body2' component='p'>We are hiring</Typography></li>
              <li><Typography variant='body2' component='p'>Blog</Typography></li>
            </ul>
          </Grid>
          <Grid item sm={2} xs={12}>
            <Typography variant='body1' component='p'>Legal</Typography>
            <ul>
              <li><Typography variant='body2' component='p'>About Us</Typography></li>
              <li><Typography variant='body2' component='p'>Carrier</Typography></li>
              <li><Typography variant='body2' component='p'>We are hiring</Typography></li>
              <li><Typography variant='body2' component='p'>Blog</Typography></li>
            </ul>
          </Grid>
          <Grid item sm={2} xs={12}>
            <Typography variant='body1' component='p'>Features</Typography>
            <ul>
              <li><Typography variant='body2' component='p'>Business Marketing</Typography></li>
              <li><Typography variant='body2' component='p'>User Analytic</Typography></li>
              <li><Typography variant='body2' component='p'>Live Chat</Typography></li>
              <li><Typography variant='body2' component='p'>Unlimited Support</Typography></li>
            </ul>
          </Grid>
          <Grid item sm={2} xs={12}>
            <Typography variant='body1' component='p'>Resources</Typography>
            <ul>
              <li><Typography variant='body2' component='p'>IOS & Android</Typography></li>
              <li><Typography variant='body2' component='p'>Watch a demo</Typography></li>
              <li><Typography variant='body2' component='p'>Customers</Typography></li>
              <li><Typography variant='body2' component='p'>API</Typography></li>
            </ul>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Box>
              <Typography variant='body1' component='p' marginBottom='20px'>Get In Touch</Typography>
              <Box>
                <img src='/assets/footer/subscribe-bttn.png' width='100%' />
              </Box>
              <Typography variant='caption' component='p' className='input-box-caption'>Lore imp sum dolor Amit</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box id='footer-message'>
      <Container maxWidth='lg'>
        <Box paddingTop='25px' paddingBottom='25px'>
          <Typography variant='body2' component='h6'>Made With Love By Finland All Right Reserved</Typography>
        </Box>
      </Container>
    </Box>
  </footer>
}

export default Footer