import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material';
import homeabout1 from '../../../src/imges/home/homeabout1.jpg'

function Homeabout() {
  return (
    <Box sx={{pt:"30px"}}>
      <Box sx={{ backgroundImage:`linear-gradient(rgba(59,62,66,0.32), rgba(59,62,66,0.32)), url(${homeabout1})`, height: "100%", width: "100%",objectFit:"cover",backgroundSize:"cover" }} >
        <Container maxWidth="lg" >
                  <Typography  pt={30} sx={{fontWeight:"900",fontSize:"18px",fontFamily:'Rubik, sans-serif',color:"white",display:"flex",justifyContent:{xs:"center",sm:"start",md:"start",lg:"start"}}}>Testimonial</Typography>
                  <Typography  sx={{fontWeight:"600",fontSize:{xs:"32px",sm:"34px",md:"36px",lg:"38px"},fontFamily:'Rubik, sans-serif',color:"white",display:"flex",justifyContent:{xs:"center",sm:"start",md:"start",lg:"start"}}}>WHAT THEY SAY</Typography>
                  <Typography pb={20} sx={{fontWeight:"600",fontSize:{xs:"32px",sm:"34px",md:"36px",lg:"38px"},fontFamily:'Rubik, sans-serif',color:"white",display:"flex",justifyContent:{xs:"center",sm:"start",md:"start",lg:"start"}}}>ABOUT US</Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Homeabout