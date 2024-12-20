import { Box, Container, Typography, Grid,Button } from '@mui/material';
import React from 'react';
import home1 from '../../imges/home/home1.jpg';
import mainimg from '../../imges/home/mainimg.png';

function Bussnesh() {
  return (
    <Box>
      <Box sx={{ backgroundImage: `linear-gradient(rgba(59,62,66,0.72), rgba(59,62,66,0.72)), url(${home1})`, height: "100%", width: "100%", backgroundSize: "cover", backgroundPosition: "center", }} >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} lg={7} sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: { xs: "column", lg: "row" }, textAlign: { xs: "center", lg: "left" }, }} >
              <Box>
                <Typography variant="h2" sx={{ fontSize: { xs: "40px", sm: "55px", md: "65px", lg: "75px" }, pb: "40px", color: "white", fontWeight: "700", fontFamily: "Poppins, sans-serif", }} >
                  GET YOUR BUSINESS ON GOOGLE SEARCH
                </Typography>
                <Button sx={{marginTop:"15px",fontSize:"16px",px:"60px",py:"15px",borderRadius:"0px",backgroundColor: "orange",cursor: "pointer",color:"white",fontWeight:"600",":hover":{backgroundColor:"white",color:"orange"}}}>READ MORE</Button>
              </Box>
            </Grid>

            <Grid item xs={12} lg={5} sx={{ display: { xs: "block", lg: "flex" }, alignItems: "center", justifyContent: "center", mt: { xs: 2, lg: 0 }, }} >
              <img src={mainimg} alt="" style={{ width: "100%", height: "auto", objectFit: "cover", }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Bussnesh;
