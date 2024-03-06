import { Box, Typography } from "@mui/material"
import './index.scss'

interface FurnitureItem {
  src: string
  alt: string
  largeFont?: boolean
}

const FurnitureItem: React.FC<FurnitureItem> = ({ largeFont, ...otherProps }) => {
  return <Box className='fi-container'>
    <Box className='furniture-item'>
      <img className='furniture-img' {...otherProps} />
      <Box className='label-box' padding={3}>
        <Typography variant='body2' component='h6' color='#2DC071'>5 Items</Typography>
        <Typography className={largeFont ? 'large-font' : ''} variant={largeFont ? 'h3' : 'h5'}>FURNITURE</Typography>
        <Typography variant='body2' component='h6'>Read More</Typography>
      </Box>
    </Box>
  </Box>
}

export default FurnitureItem