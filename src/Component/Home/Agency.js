import React from 'react'
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import Agency1 from '../../../src/imges/home/Agency1.jpg'
import TurnSlightRightIcon from '@mui/icons-material/TurnSlightRight';
import TwitterIcon from '@mui/icons-material/Twitter';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import { useNavigate } from 'react-router-dom';



function Agency() {

     const navigate=useNavigate()

  return (
    <Box>
      <Container maxWidth='lg'>
        <Grid container xs={12} item spacing={5} pt="50px" sx={{display:"flex",justifyContent:"center"}}>
          <Grid item xs={12} lg={7}  >
              <Typography sx={{fontSize:"32px",fontWeight:"600",pb:"10px",fontFamily: 'Poppins, sans-serif',display:"flex",justifyContent:{xs:"center",sm:"center",md:"start",lg:"start"}}}>SEO Agency of The Year</Typography>
              <Typography sx={{border:{xs:'none',sm:"none ",md:"3px solid #FFA61B",lg:"3px solid #FFA61B"},width:"100px"}}></Typography>
              <Typography sx={{pt:"25px",fontSize:"22px",fontWeight:"600",color:"#3A4E5B", display:"flex",justifyContent:{xs:"center",sm:"center",md:"start",lg:"start"},fontFamily: 'Poppins, sans-serif'}}>Finalist</Typography>
              <Typography sx={{fontFamily: 'Rubik, sans-serif',fontSize:"17px",pt:"10px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
               <Box sx={{display:"flex",pt:"30px",gap:"20px"}}>
                       <Box>
                            <TurnSlightRightIcon sx={{fontSize:"50px",color:"#FFA61B"}}/>
                       </Box>
                       <Box >
                             <Box>
                                <Typography variant='h5' sx={{fontWeight:"600",fontFamily: 'Poppins, sans-serif'}}>Increased Traffic</Typography>
                             </Box>
                             <Box>
                                <Typography sx={{fontSize:"16px",fontFamily: 'Rubik, sans-serif',pt:"10px",color:'#696969'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utsa.</Typography>
                             </Box>
                       </Box>
               </Box>
               <Box sx={{display:"flex",pt:"40px",gap:"20px"}}>
                       <Box>
                            <TwitterIcon sx={{fontSize:"50px",color:"#FFA61B"}}/>
                       </Box>
                       <Box >
                             <Box>
                                <Typography variant='h5' sx={{fontWeight:"600",fontFamily: 'Poppins, sans-serif'}}>Cost-effectiveness</Typography>
                             </Box>
                             <Box>
                                <Typography sx={{fontSize:"16px",fontFamily: 'Rubik, sans-serif',pt:"10px",color:'#696969'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utsa.</Typography>
                             </Box>
                       </Box>
               </Box>

               <Box sx={{display:"flex",pt:"40px",gap:"20px"}}>
                       <Box>
                            <TvOutlinedIcon sx={{fontSize:"50px",color:"#FFA61B"}}/>
                       </Box>
                       <Box >
                             <Box>
                                <Typography variant='h5' sx={{fontWeight:"600",fontFamily: 'Poppins, sans-serif'}}>Increased Site Usability</Typography>
                             </Box>
                             <Box>
                                <Typography sx={{fontSize:"16px",fontFamily: 'Rubik, sans-serif',pt:"10px",color:'#696969'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utsa.</Typography>
                             </Box>
                       </Box>
               </Box>
          </Grid>
           <Grid item xs={12} lg={5} sx={{ display: { xs: "flex", lg: "flex"}, alignItems: "center", justifyContent: "center", mt: { xs: 2, lg: 0 }, }} >
              <img src={Agency1} alt="" style={{ width: "100%", objectFit: "cover",border:"15px solid #F9F9F9" }} />
           </Grid>
        </Grid>
      </Container>
 
      <Box sx={{backgroundColor:"#6F0AC8",mt:"30px"}}>
          <Box sx={{display:{lg:"flex",md:"block",xs:"block"},justifyContent:"space-around",py:5,alignItems:"center"}}>
            <Typography variant='h5' sx={{fontWeight:"600",fontFamily: "Poppins, sans-serif",color:"#F7F7F7",textAlign:{md:"center",sm:"center",xs:"center"},py:{sm:1}}}>Do you need SEO & Digital Marketing Services</Typography>
            <Box sx={{display:"flex",justifyContent:{xs:"center"},py:{xs:2}}}>
              <Button onClick={() => navigate('/contactpage')} sx={{backgroundColor:"#F1E7FA",borderRadius:"0px",color:"#6F0AC8",fontWeight:"600","&:hover":{color:"black"}}}>CONTACT US</Button>
            </Box>
          </Box>
      </Box>
    </Box>
           
  )
}

export default Agency