import { Box, Typography } from "@mui/material"

interface IHeaderFurnitureItem {
  src: string
  alt: string
  largeFont?: boolean
}

const HeaderFurnitureItem: React.FC<IHeaderFurnitureItem> = ({ largeFont, ...otherProps }) => {
  return <Box sx={{ position: 'relative', height: '100%', weight: '100%' }}>
    <img className='hdr-furniture-img' {...otherProps} />
    <Box sx={{ position: 'absolute', top: 0, left: 0 }} padding={3}>
      <Typography variant='body2' component='h6' color='#2DC071'>5 Items</Typography>
      <Typography variant={largeFont ? 'h3' : 'h5'}>FURNITURE</Typography>
      <Typography variant='body2' component='h6'>Read More</Typography>
    </Box>
  </Box>
}

export default HeaderFurnitureItem