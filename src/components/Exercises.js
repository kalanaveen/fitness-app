import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Exercises = ({ setExercises, exercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      
      if (bodyPart)
      
    }
  })
  return (
    <Box id='exercises' sx={{mt:{lg:'100px'}}} mt='50px' p='20px'>
      <Typography variant='h4' fontWeight='
       bold' sx={{fontSize:{lg:'44px',xs:'30px'}}} mb='46px'>Showing Results</Typography>
    </Box>
      
  )
}

export default Exercises
