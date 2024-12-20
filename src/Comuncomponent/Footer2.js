import React from 'react'
import { Box, Container, Typography, Grid,} from '@mui/material';
import Reqvestfree1 from '../imges/home/reqvestfree1.jpg'
import logo2 from '../../src/imges/navbar/logo2.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import RingVolumeOutlinedIcon from '@mui/icons-material/RingVolumeOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { useNavigate } from 'react-router-dom';

function Footer2() {
     const navigate = useNavigate();
  return (
    <Box 
                sx={{ 
                    backgroundImage: `url(${Reqvestfree1})`, 
                    height: "100%", 
                    width: "100%", 
                    backgroundAttachment:'fixed',
                    overflow:"hidden",
                    objectFit:"cover",
                }}
            >
                <Container maxWidth="lg">
                <Grid item container xs={12} >
                 <Grid item xs={12} sm={7} md={5} lg={5} sx={{display:"flex" , justifyContent:{lg:"start",md:"start",sm:"start",xs:"center"},pt:"60px"}}>
                       <Box>     
                           <img src={logo2} alt="Logo" style={{ padding: '25px 0px' }}/>
                           <Typography sx={{width:{lg:"350px",md:"350px",sm:"320px",xs:"285px"},fontSize:"17px",lineHeight:"30px",fontFamily: 'Rubik, sans-serif',color:"white",color:"#CACCD4"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer galley.</Typography>
                       </Box>
                 </Grid>


                 <Grid item xs={6} sm={3} md={2} lg={2} sx={{display:"flex" , justifyContent:{lg:"start",md:"start",sm:"end",xs:"center"}}}>    
                    <Box>
                         <Typography sx={{fontSize:"16px",color:"white",fontWeight:"700",pt:"80px",pl:"10px"}}>USEFUL LINKS</Typography>   
                         <Typography sx={{fontSize:"14px",color:"white",pt:"30px",display:"flex",alignItem:"center",fontFamily:'Rubik, sans-serif',color:"#CACCD4",cursor:"pointer"}}  onClick={() => navigate('/')}><NavigateNextIcon/> Home</Typography>
                         <Typography sx={{fontSize:"14px",color:"white",pt:"10px",display:"flex",alignItem:"center",fontFamily:'Rubik, sans-serif',color:"#CACCD4",cursor:"pointer"}} onClick={() => navigate('/aboutuspage')}><NavigateNextIcon/> About Us</Typography>
                         <Typography sx={{fontSize:"14px",color:"white",pt:"10px",display:"flex",alignItem:"center",fontFamily:'Rubik, sans-serif',color:"#CACCD4",cursor:"pointer"}} onClick={() => navigate('/servicespage')}><NavigateNextIcon/>Service</Typography>
                         <Typography sx={{fontSize:"14px",color:"white",pt:"10px",display:"flex",alignItem:"center",fontFamily:'Rubik, sans-serif',color:"#CACCD4",cursor:"pointer"}} onClick={() => navigate('/blogpage')}><NavigateNextIcon/>Blog</Typography>
                         <Typography sx={{fontSize:"14px",color:"white",pt:"10px",display:"flex",alignItem:"center",fontFamily:'Rubik, sans-serif',color:"#CACCD4",cursor:"pointer"}} onClick={() => navigate('/contactpage')}><NavigateNextIcon/>Contact</Typography>
                    </Box>
                 </Grid>

                 <Grid item xs={6} sm={6} md={2} lg={2} sx={{display:"flex" , justifyContent:{lg:"start",md:"start",sm:"start",xs:"center"}}}>
                    <Box>
                         <Typography sx={{fontSize:"16px",color:"white",fontWeight:"700",pt:"80px",pl:"10px"}}>SERVICES</Typography>
                         <Typography sx={{fontSize:"14px",color:"white",pt:"30px",display:"flex",alignItem:"center",fontFamily:'Rubik, sans-serif',color:"#CACCD4"}}  onClick={() => navigate('/servicesdetailspage')} ><NavigateNextIcon/>SEO service</Typography>
                         <Typography sx={{fontSize:"14px",color:"white",pt:"10px",display:"flex",alignItem:"center",fontFamily:'Rubik, sans-serif',color:"#CACCD4"}}  onClick={() => navigate('/servicesdetailspage2')} ><NavigateNextIcon/>content marketing</Typography>
                         <Typography sx={{fontSize:"14px",color:"white",pt:"10px",display:"flex",alignItem:"center",fontFamily:'Rubik, sans-serif',color:"#CACCD4"}}  onClick={() => navigate('/servicesdetailspage3')} ><NavigateNextIcon/>data analysis</Typography>
                         <Typography sx={{fontSize:"14px",color:"white",pt:"10px",display:"flex",alignItem:"center",fontFamily:'Rubik, sans-serif',color:"#CACCD4"}}  onClick={() => navigate('/servicesdetailspage4')} ><NavigateNextIcon/>digital marketing</Typography>
                         <Typography sx={{fontSize:"14px",color:"white",pt:"10px",display:"flex",alignItem:"center",fontFamily:'Rubik, sans-serif',color:"#CACCD4"}}  onClick={() => navigate('/servicesdetailspage5')} ><NavigateNextIcon/>web analytics</Typography>
                    </Box>
                 </Grid>

                            

                 <Grid item xs={12} sm={6} md={3} lg={3} sx={{display:"flex" ,justifyContent:{lg:"start",md:"start",sm:"start",xs:"center"}}}>
                    <Box>
                         <Typography sx={{fontSize:"16px",color:"white",fontWeight:"700",pt:"80px",pl:"10px"}}>SERVICES</Typography>
                         <Box sx={{display:"flex",alignItems:"center",gap:"15px"}}>
                              <PlaceOutlinedIcon  sx={{mt:"30px",color:"white"}}/>
                              <Typography sx={{mt:"30px",fontSize:"17px",fontWeight:"500",color:"white"}} >143 castle road 517 district, kiyev port south Canada</Typography>   
                         </Box>
                         <Box sx={{display:"flex",alignItems:"center",gap:"15px"}}>
                              <RingVolumeOutlinedIcon  sx={{mt:"30px",color:"white"}}/>
                              <Typography sx={{mt:"30px",fontSize:"17px",fontWeight:"500",color:"white"}} >+00 12 123 4567</Typography>   
                         </Box>
                         <Box sx={{display:"flex",alignItems:"center",gap:"15px"}}>
                              <DraftsOutlinedIcon  sx={{mt:"30px",color:"white"}}/>
                              <Typography sx={{mt:"30px",fontSize:"17px",fontWeight:"500",color:"white"}}>info@sbtechnosoft.com</Typography>   
                         </Box>
                    </Box>
                 </Grid>

             </Grid>
             
               <Typography sx={{borderTop:"1px solid #4D556D",mt:5,color:"white",fontFamily: 'Rubik, sans-serif',fontSize:"14px",pt:"20px",textAlign:"center"}}>© Copyrights 2019 Skyline. All rights reserved.</Typography>
                </Container>
            </Box>
  )
}

export default Footer2