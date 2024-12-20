import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';

function Header() {
  return (
    <Box sx={{ backgroundColor: "#212A49", width: "100%"}}>
      <Container maxWidth='lg'>
        <Box sx={{ display:{lg:"flex",md:"flex",sm:"flex",xs:"block"}, justifyContent:{xs:"center",sm:"space-between",md:"space-between",lg:"space-between"}, py: "15px"}}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap" }}>
            <Typography sx={{color:"white",fontSize: '18px',":hover":{color:"orange"}}}><i class="fa-brands fa-facebook-f"></i></Typography>
            <Typography sx={{color:"white",fontSize: '18px',":hover":{color:"orange"}}}><i class="fa-brands fa-twitter"></i></Typography> 
            <Typography sx={{color:"white",fontSize: '18px',":hover":{color:"orange"}}}><i class="fa-brands fa-linkedin-in"></i></Typography>
            <Typography sx={{color:"white",fontSize: '18px',":hover":{color:"orange"}}}><i class="fa-brands fa-google"></i></Typography>
          </Box>
          <Typography sx={{ color: "#fff", fontFamily: "Rubik, sans-serif", paddingTop: { xs: "20px", sm: '0px', md: '0px', lg: "0px" }, fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>
            Opening Hours: Monday - Saturday 9 AM to 5 PM
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ pt: "30px", pb: "30px" }}>
          <Grid item xs={12} sm={6} md={4} lg={3.6} sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <LocationOnOutlinedIcon sx={{ fontSize: "50px", color: "#FFA633" }} />
            <Box>
              <Typography sx={{ fontWeight: "600", fontFamily: "Poppins, sans-serif", color: "white", fontSize: "18px" }}>
                OFFICE LOCATION
              </Typography>
              <Typography sx={{ fontFamily: "Rubik, sans-serif", color: "white", fontSize: "12px" }}>
                1379 Mountain View, CA 94043, United States
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2.4} sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <MailOutlineOutlinedIcon sx={{ fontSize: "50px", color: "#FFA633" }} />
            <Box>
              <Typography sx={{ fontWeight: "600", fontFamily: "Poppins, sans-serif", color: "white", fontSize: "18px" }}>
                MAIL TO US
              </Typography>
              <Typography sx={{ fontFamily: "Rubik, sans-serif", color: "white", fontSize: "12px" }}>
                info@sbtechnosoft.com
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={3} sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontFamily: "Rubik, sans-serif", color: "white", fontSize: "16px" }}>
              Schedule Your Appointment Today
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box
               sx={{display: "flex",gap: "20px",backgroundColor: "#FFA61B",alignItems: "center",py: "10px","&:hover": {backgroundColor: "#fff",".texthed":{color:"#FFA61B",},transition:".5s"}}}>
               <HeadsetOutlinedIcon
                 sx={{fontSize: "30px",color: "#FFA61B",padding: "5px",backgroundColor: "white",borderRadius: "50%",marginLeft: "10px",}}/>
               <Typography sx={{fontWeight: "600",fontFamily: "Poppins, sans-serif",color: "white",fontSize: "16px",}}className={"texthed"}>1-900-725-4567</Typography>
             </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
