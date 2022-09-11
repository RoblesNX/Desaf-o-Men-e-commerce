import {Box} from '@mui/material'
import React from 'react'
import Header from '../Header/Header'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const Home = () => {
  return (
    <Box sx={{ width: '100%', height: 'auto'}}>
         <Header/>
         <ItemListContainer/>
    </Box>

  )
}

export default Home