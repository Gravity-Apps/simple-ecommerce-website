import { Breadcrumbs, Typography } from "@mui/material"

const CustomBreadcrumbs = () => {
  return <Breadcrumbs separator={<img src='/assets/details/caret-right.png' />}>
    <Typography variant='body1'>Home</Typography>
    <Typography variant='body1'>Shop</Typography>
  </Breadcrumbs>
}

export default CustomBreadcrumbs;