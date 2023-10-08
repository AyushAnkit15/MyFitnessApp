import React from 'react'
import { Stack ,Box  ,Typography } from '@mui/material'

import Logo from '../assets/icons/My Fitness App-logos.jpeg'
const Foot = () => {
  return (
    <Box mt="80px" bgcolor= '#fff2db'>
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" >
      <img src={Logo} alt="logo" style={{ width: '900px', height: '401px' }} />
    </Stack>
    <Typography variant="h5" color='red' sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">AYUSH ANKIT REACT FRONTEND PROJECT</Typography>
  </Box>
  )
}

export default Foot