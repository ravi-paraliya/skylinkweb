import React from 'react'
import { Box, Container, Typography,Grid } from '@mui/material';
import aboutusbody from '../../imges/aboutus/aboutusbody.jpg'
import HouseIcon from '@mui/icons-material/House';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';

function Testimonials() {
  return (
    <Box>
    <Box sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${aboutusbody})`,
        display: "flex", justifyContent: "center", alignItems: "center",
        backgroundSize: "cover", height: "250px", width: "100%", backgroundPosition: "center"
    }}>
        <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{
                    color: "white", fontWeight: "600", fontSize: "30px",
                    fontFamily: 'Poppins, sans-serif', display: "flex", alignItems: "center",
                }}> Testimonials </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "20px", alignItems: "center" }}>
                <HouseIcon sx={{ color: "#E3951B", fontSize: "22px", marginRight: "5px" }} />
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" sx={{ color: "white", fontWeight: "600" }} href="/"></Link>
                    <Typography sx={{ color: '#DDE4FF', fontFamily: 'Rubik, sans-serif' }}> Testimonials</Typography>
                </Breadcrumbs>
            </Box>
        </Box>
    </Box>

    <Container maxWidth="lg">
  <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center",mt:{lg:"120px",md:"100px",sm:"10px",xs:"0px"} }}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={4}>
        <Box sx={{ mt: { xs: "20px", md: "50px" } }}>
          <Typography sx={{ color: "#5C5C5C", fontWeight: "600", fontFamily: "Rubik, sans-serif", fontSize: { xs: "14px", md: "16px" }, textAlign: { xs: "center", md: "left" }, }} > Testimonial </Typography>
          <Box >
            <Typography  sx={{  color: "#6F0AC8",  fontSize: { xs: "21px",sm:"30px", md: "38px" },  fontWeight: "700",  fontFamily: "Poppins, sans-serif",  display:"flex",  justifyContent:{sm:"center",md:"center",xs:"center",lg:"center"},  textAlign: "start",  }}  >  WHAT THEY SAY ABOUT US  </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ backgroundColor: "#212A49", width: "100%", borderRadius: "8px",borderRadius:"0px" }}>
          <Box sx={{ p: { xs: "20px", md: "40px" } }}>
            <Typography sx={{ display: "flex", justifyContent: "center", color: "white", fontFamily: "'Rubik', sans-serif", fontSize: { xs: "14px", md: "17px" }, textAlign: "center", }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book.</Typography>
            <Typography sx={{ display: "flex", justifyContent: "center", color: "white", mt: "10px", fontWeight: "600", fontFamily: "'Rubik', sans-serif", fontSize: { xs: "14px", md: "16px" }, textAlign: "center", }} > Ariana Hedge, CEO of Devrise </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "10px",fontSize:"10px" }}>
              <StarIcon sx={{ color: "#F4D632" }} />
              <StarIcon sx={{ color: "#F4D632" }} />
              <StarIcon sx={{ color: "#F4D632" }} />
              <StarIcon sx={{ color: "#F4D632" }} />
              <StarIcon sx={{ color: "#F4D632" }} />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Box>
</Container>;

</Box>
  )
}

export default Testimonials