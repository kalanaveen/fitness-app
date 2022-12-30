import { Stack, TextField, Typography, Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {
  const [search, setSearch] = useState('');

  const handleSearch = async() => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      
      const searchedExercises = exerciseData.filter((item)=>item.name.toLowerCase().includes(search) || item.equipment.toLowerCase.includes(search))
    }
  }
  

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px' , xs:'30px'}}} mb='49px' textAlign='center'>Awesome Exercises You <br /> Should Know</Typography>
      <Box position='relative' mb='72px'>
        <TextField height='76px' sx={{ input: { border: 'none', fontWeight: '700px', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }} placeholder="Search Exercises" type='text' value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} />
        <Button onClick={handleSearch} className="search-btn" sx={{backgroundColor:'#FF2625' , color:'#fff' , textTransform:'none' , width:{lg:'173px' ,xs:'80px'},height:'56px',position:'absolute',right:'0px' , fontSize: { lg: '20px', xs: '14px' }}}>Search</Button>
      </Box>
     </Stack>
  )
}

export default SearchExercises
