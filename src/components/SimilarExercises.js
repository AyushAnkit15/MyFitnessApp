import React from 'react'
import { Stack , Box , Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './loader'

const SimilarExercises = ({targetMuscleExercises , equipmentExercises}) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }} >
    <Typography variant='h3'  mb={2}>Same group exercises are </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> :<Loader/>}
    </Stack>

    <Typography variant='h3'  mb={2}>Same equipment exercises are </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> :<Loader/>}
    </Stack>
  </Box>
)

export default SimilarExercises