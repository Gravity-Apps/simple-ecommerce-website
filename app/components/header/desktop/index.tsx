import { Box, Link, Stack, Typography } from "@mui/material"
import './index.scss'

const DesktopHeader: React.FC = () => {
  return <Box id='desktop-header'>
    <Box>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        className='header-banner'
      >
        <Stack direction='row' spacing={3}>
          <Stack direction='row' spacing={0.5} alignItems='center'>
            <img src='/assets/header/phone-icon.png' alt='phone-icon' />
            <Typography variant='body2' component='h6'>(225) 555-0118</Typography>
          </Stack>
          <Typography variant='body2' component='h6'><img src='/assets/header/email-icon.png' alt='email-icon' />&nbsp;michelle.rivera@example.com</Typography>
        </Stack>
        <Box>
          <Typography variant='body2' component='h6'>Follow Us  and get a chance to win 80% off</Typography>
        </Box>
        <Stack direction='row' spacing={1.5} alignItems='center'>
          <Typography variant='body2' component='h6'>Follow Us  :</Typography>
          <img src='/assets/header/social-media-set.png' alt='social-media-set' />
        </Stack>
      </Stack>
      <Stack direction='row' justifyContent='space-between' marginTop={1.5} marginBottom={1} paddingLeft={4} paddingRight={4}>
        <Stack direction='row' spacing={5}>
          <img src='/assets/header/navbar-brand.png' alt='navbar-brand' />
          <Stack direction='row' spacing={2} alignItems='center'>
            <Typography variant='body2' component='h6'>
              <Link href='#' underline='none' color='#737373'>Home</Link>
            </Typography>
            <Typography variant='body2' component='h6'>
              <Link href='#' underline='none' color='#737373'>Shop</Link>
            </Typography>
            <Typography variant='body2' component='h6'>
              <Link href='#' underline='none' color='#737373'>About</Link>
            </Typography>
            <Typography variant='body2' component='h6'>
              <Link href='#' underline='none' color='#737373'>Blog</Link>
            </Typography>
            <Typography variant='body2' component='h6'>
              <Link href='#' underline='none' color='#737373'>Contact</Link>
            </Typography>
            <Typography variant='body2' component='h6'>
              <Link href='#' underline='none' color='#737373'>Pages</Link>
            </Typography>
          </Stack>
        </Stack>
        <Stack direction='row'>
          <Stack direction='row' alignItems='center' padding={2}>
            <Box>
              <img src='/assets/header/user-icon.png' width={12} height={12} />
            </Box>
            &nbsp;
            <Typography variant='body2' component='h6'>
              <Link href='#' underline='none' color='#23A6F0'>Login / Register</Link>
            </Typography>
          </Stack>
          <Stack direction='row' alignItems='center'>
            <img src='/assets/header/search-icon.png' width={46} height={46} />
            <img src='/assets/header/cart-icon.png' width={46} height={46} />
            <img src='/assets/header/heart-icon.png' width={46} height={46} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  </Box>
}

export default DesktopHeader