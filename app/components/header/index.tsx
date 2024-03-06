import DesktopHeader from "./desktop"
import MobileHeader from "./mobile"

import './index.scss'
import { Box, Container, Grid } from "@mui/material"
import HeaderFurnitureItem from "./components/header-furniture-item"

const Header = () => {  
  return <header>
    <DesktopHeader />
    <MobileHeader />
  </header>
}

export default Header