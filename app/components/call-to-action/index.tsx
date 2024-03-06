import { Box, Button, Container, Typography } from "@mui/material"
import './index.scss'

const CallToAction = () => {
  return <Box id='call-to-action-container'>
    <Container maxWidth='sm' id='call-to-action-content'>
      <Typography variant='body2' component='h6' color='#23A6F0'>Designing Better Experience</Typography>
      <Typography variant='h4' component='h6' fontSize={40}>Problems trying to resolve the conflict between</Typography>
      <Box>
        <Typography variant='body2' component='h6' className='description-line'>Problems trying to resolve the conflict between the two major realms of Classical physics: </Typography>
      </Box>
      <Typography variant='h5' component='h6' color='#23856D'>$16.48</Typography>
      <Button
        variant='contained'
        className='call-to-action-bttn'
      >
        ADD YOUR CALL TO ACTION
      </Button>
    </Container>
  </Box>
}

export default CallToAction