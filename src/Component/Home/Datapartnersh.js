import React from 'react';
import home1 from '../../imges/home/home1.jpg';
import { Box, Container, Grid, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LanguageIcon from '@mui/icons-material/Language';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useNavigate } from 'react-router-dom';

function  Datapartnersh() {
  
  const navigate=useNavigate()

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Box sx={{ backgroundColor: "#F9F9FF", minHeight: "100vh" }}>
        <Container maxWidth="lg">
          <Grid item container xs={12} sx={{display:"flex" , justifyContent:"center"}}>
                 <Grid xs={12} sm={8} md={6} lg={4} sx={{display:"flex" , justifyContent:"center",pt:"50px"}}>
                 <Card  sx={{ maxWidth: 345 ,"&:hover": {boxShadow:"1px 1px 30px  #93979B"}}}>
                             <CardActionArea sx={{width:"100%",backgroundColor:"#F9F9FF","&:hover": {backgroundColor: "#FFFFFF"}}}>
                                 <Box sx={{mt:"50px"}}>
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                      <SignalCellularAltIcon sx={{ fontSize: "90px", backgroundColor: "#FFFAF1", color: "#FFA923", p: "10px", borderRadius: "50%" }} />
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"24px",pt:"10px",fontWeight:"600"}}>Data Analytics</Typography>
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"17px",pt:"30px",fontFamily: 'Rubik, sans-serif',color:"#989898",display:"flex",textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</Typography>
                                     </Box>
                                 </Box>

                                  <Box >
                                      <Box sx={{pt:"25px",display:"flex",justifyContent:"center",mb:"50px"}}>
                                      <Box sx={{ display: "flex", justifyContent: "center", pb: "30px" }}>
                                           <Button sx={{width:"250px", mt: "30px", px:"20px", py: "10px", border: "2px solid #6F0AC8", backgroundColor: "#fff", color: "#6F0AC8", cursor: "pointer", fontSize: "14px", ":hover": { backgroundColor: "#6F0AC8", color: "white" } }}>
                                               Read more
                                           </Button>
                                      </Box>
                                     </Box>
                                     </Box>
                           
                             </CardActionArea>
                  </Card>

                 </Grid>


                 <Grid xs={12} sm={8} md={6} lg={4} sx={{display:"flex" , justifyContent:"center",pt:"50px"}}>
                 <Card  sx={{ maxWidth: 345 ,"&:hover": {boxShadow:"1px 1px 30px  #93979B"}}}>
                             <CardActionArea sx={{width:"100%",backgroundColor:"#F9F9FF","&:hover": {backgroundColor: "#FFFFFF"}}}>
                                 <Box sx={{mt:"50px"}}>
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                      <LanguageIcon sx={{ fontSize: "90px", backgroundColor: "#FFFAF1", color: "#FFA923", p: "10px", borderRadius: "50%" }} />
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"24px",pt:"10px",fontWeight:"600"}}>SEO Services</Typography>
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"17px",pt:"30px",fontFamily: 'Rubik, sans-serif',color:"#989898",display:"flex",textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</Typography>
                                     </Box>
                                 </Box>

                                  <Box >
                                      <Box sx={{pt:"25px",display:"flex",justifyContent:"center",mb:"50px"}}>
                                      <Box sx={{ display: "flex", justifyContent: "center", pb: "30px" }}>
                                           <Button sx={{width:"250px", mt: "30px", px:"20px", py: "10px", border: "2px solid #6F0AC8", backgroundColor: "#fff", color: "#6F0AC8", cursor: "pointer", fontSize: "14px", ":hover": { backgroundColor: "#6F0AC8", color: "white" } }}>
                                             Read more
                                           </Button>

                                      </Box>
                                     </Box>
                                     </Box>
                           
                             </CardActionArea>
                  </Card>

                 </Grid>




                 <Grid xs={12} sm={8} md={6} lg={4} sx={{display:"flex" , justifyContent:"center",pt:"50px"}}>
                 <Card  sx={{ maxWidth: 345 ,"&:hover": {boxShadow:"1px 1px 30px  #93979B"}}}>
                             <CardActionArea sx={{width:"100%",backgroundColor:"#F9F9FF","&:hover": {backgroundColor: "#FFFFFF"}}}>
                                 <Box sx={{mt:"50px"}}>
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                      <PersonOutlineOutlinedIcon sx={{ fontSize: "90px", backgroundColor: "#FFFAF1", color: "#FFA923", p: "10px", borderRadius: "50%" }} />
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"24px",pt:"10px",fontWeight:"600"}}>Partners Info</Typography>
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"17px",pt:"30px",fontFamily: 'Rubik, sans-serif',color:"#989898",display:"flex",textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</Typography>
                                     </Box>
                                 </Box>

                                  <Box >
                                      <Box sx={{pt:"25px",display:"flex",justifyContent:"center",mb:"50px"}}>
                                      <Box sx={{ display: "flex", justifyContent: "center", pb: "30px" }}>
                                           <Button sx={{width:"250px", mt: "30px", px:"20px", py: "10px", border: "2px solid #6F0AC8", backgroundColor: "#fff", color: "#6F0AC8", cursor: "pointer", fontSize: "14px", ":hover": { backgroundColor: "#6F0AC8", color: "white" } }}>
                                             Read more
                                           </Button>
                                      </Box>
                                     </Box>
                                     </Box>                   
                             </CardActionArea>
                  </Card>
                 </Grid>
             </Grid>
          

          {/* Bottom Section */}
          <Box sx={{ pt: "50px" }}>
            <Box sx={{ width: { xs: "95%", sm: "86%", md: "87%", lg: "90%" }, backgroundColor: "#F2F2F2", p: { xs: "20px", sm: "30px", md: "40px", lg: "50px" }, mx: "auto" }}>
              <Grid container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Grid item xs={12} sm={8} md={6} lg={9} sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" }, mb: { xs: 2, sm: 0 } }}>
                  <Typography sx={{ fontSize: { xs: "20px", sm: "24px", md: "26px", lg: "30px" }, fontWeight: "600", fontFamily: "Poppins, sans-serif", textAlign: { xs: "center", sm: "left" } }}>
                    Do you need SEO & Digital Marketing Services
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={6} lg={3} sx={{ display: "flex", justifyContent: { xs: "center", sm: "center", md: "flex-end" } }}>
                  <Button onClick={() => navigate('/contactpage')} sx={{px: { sm: "40px" }, py: "10px", fontWeight: "600", border: "3px solid #6F0AC8", backgroundColor: "#fff", color: "#6F0AC8", cursor: "pointer", fontSize: "14px", ":hover": { backgroundColor: "#6F0AC8", color: "white" } }}>
                    CONTACT US
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}


export default Datapartnersh;

