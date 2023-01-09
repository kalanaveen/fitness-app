import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({ setExercises, exercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();
  }, [bodyPart])
  
  // pagination part
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirsttExercise = currentPage - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirsttExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  }
  
  if(!currentExercises) return <h1>loader</h1>

  return (
    <Box id='exercises' sx={{mt:{lg:'100px'}}} mt='50px' p='20px'>
      <Typography variant='h4' fontWeight='
       bold' sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='46px'>Showing Results</Typography>
      <Stack direction='row'>{currentExercises.map((exercise, id) => (
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      ))}</Stack>
    </Box>
      
  )
}

export default Exercises
