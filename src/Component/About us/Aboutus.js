import React from 'react'
import { Box, Container, Typography, Grid,Button } from '@mui/material';
import aboutusbody from '../../imges/aboutus/aboutusbody.jpg'
import HouseIcon from '@mui/icons-material/House';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


function Aboutus() {

    
  return (
    <Box sx={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${aboutusbody})`,display:"flex",alignItems:"center",backgroundSize:"cover", height: "250px", width: "100%", backgroundSize: "cover", backgroundPosition: "center", }} >
      <Container maxWidth="lg">
            <Box sx={{display:"flex",justifyContent:"center"}}>
                  <Typography sx={{color:"white",fontWeight:"600",fontSize:"30px",fontFamily: 'Poppins, sans-serif',display:"flex",alignItems:"center"}}>About Us</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"center",mt:"20px"}}>
                  <HouseIcon sx={{color:"#E3951B",fontSize:"22px"}}/>
                  <Breadcrumbs aria-label="breadcrumb" >
                     <Link underline="hover" sx={{color:"white",fontWeight:"600"}} href="/"></Link>
                     <Typography sx={{ color: '#DDE4FF',fontFamily: 'Rubik, sans-serif'}}>About Us</Typography>
                  </Breadcrumbs> 
            </Box>
      </Container>
    </Box>

  )
}

export default Aboutus