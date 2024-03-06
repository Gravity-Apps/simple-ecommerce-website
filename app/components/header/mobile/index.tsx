'use client'

import { Box, Stack, Typography } from "@mui/material"

import './index.scss'
import { useState } from "react"

const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return <Box id='mobile-header'>
    <Stack id='header-content' direction='row' justifyContent='space-between' alignItems='center'>
      <Box><img src='/assets/header/navbar-brand.png' /></Box>
      <Box><img src='/assets/header/burger-menu.png' onClick={() => setShowMenu(!showMenu)} /></Box>
    </Stack>
    {
      (showMenu) &&
      <Box>
        <ul className='nav-items'>
          <li className='nav-item'>
            <Typography variant='body1' component='span'>Home</Typography>
          </li>
          <li className='nav-item'>
            <Typography variant='body1' component='span'>Shop</Typography>
          </li>
          <li className='nav-item'>
            <Typography variant='body1' component='span'>About</Typography>
          </li>
          <li className='nav-item'>
            <Typography variant='body1' component='span'>Blog</Typography>
          </li>
          <li className='nav-item'>
            <Typography variant='body1' component='span'>Contact</Typography>
          </li>
          <li className='nav-item'>
            <Typography variant='body1' component='span'>Pages</Typography>
          </li>
          <li className='nav-item'>
            <Box className="register-item">
              <Box>
                <img src='/assets/header/user-icon-lg.png' />
              </Box>
              <Typography
                variant='body1'
                component='span'
                className='login-register'
              >
                Login / Register
              </Typography>
            </Box>
          </li>
          <li><img src='/assets/header/search-icon-lg.png' /></li>
          <li><img src='/assets/header/cart-icon-lg.png' /></li>
          <li><img src='/assets/header/heart-icon-lg.png' /></li>
        </ul>
      </Box>
    }
  </Box>
}

export default MobileHeader