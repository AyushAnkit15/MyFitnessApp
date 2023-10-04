import React from 'react'
import classes from'./App.css'
import { Route , Routes } from 'react-router-dom'
import { Box } from '@mui/material' // box is div with shading and colours
import Navbar from './components/Navbar'
import ED from './Pages/ED'
import Home from './Pages/Home'
//import Footer from './components/Footer'
import Foot from './components/Foot'
const App = () => {
  return (
    <Box width= '400px' sx={{ width: {xl :'1448px'}}} m='auto'>
 
 <Navbar></Navbar>
 <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/exercise/:id" element={<ED />}/>
 </Routes>
 <Foot/>
    </Box>
   
  )
}

export default App