'use client'

import { ThemeProvider, createTheme } from "@mui/material"

const defaultColor = '#252B42'

const basicTextStyling = {
  color: defaultColor,
  fontWeight: 700,
}

const theme = createTheme({
  typography: {
    body1: basicTextStyling,
    body2: basicTextStyling,
    h2: basicTextStyling,
    h3: basicTextStyling,
    h4: basicTextStyling,
    h5: basicTextStyling,
    h6: basicTextStyling
  }
})

const ThemeWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
}

export default ThemeWrapper