import { Box, Typography,Grid, Container,Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LanguageIcon from '@mui/icons-material/Language';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import whatprovid1 from '../../../src/imges/home/whatprovid1.png'
import whatprovid2 from '../../../src/imges/home/whatprovid2.png'
import whatprovid3 from '../../../src/imges/home/whatprovid3.png'
import whatprovid4 from '../../../src/imges/home/whatprovid4.png'
import whatprovid5 from '../../../src/imges/home/whatprovid5.png'
import whatprovid6 from '../../../src/imges/home/whatprovid6.png'
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import AddIcon from '@mui/icons-material/Add';

function Whoteprovid() {

  // const [startCounting, setStartCounting] = useState(false);
  // const statsRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setStartCounting(true);
  //       }
  //     },
  //     { threshold: 0.5 } 
  //   );

  //   if (statsRef.current) {
  //     observer.observe(statsRef.current);
  //   }

  //   return () => {
  //     if (statsRef.current) {
  //       observer.unobserve(statsRef.current);
  //     }
  //   };
  // }, []);

  const [startCounting, setStartCounting] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  // Update the state when the element is in view
  React.useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  const navigate = useNavigate()
  return (
         <Box sx={{backgroundColor:"#F9F9FF",height:"100%"}}>

               <Container maxWidth="lg">
                       <Box sx={{display:"flex", justifyContent:"center",pt:{xs:"10px" , lg:"100px"}}}>
                           <Typography sx={{fontWeight:"800",color:"#93979B"}}>OUR SERVICES</Typography>
                       </Box>
                       <Box sx={{display:"flex", justifyContent:"center",pt:"5px"}}>
                       <Typography sx={{fontWeight: "800",color: "#373737",fontSize:{ xs: "24px", lg: "32px" }}}>WHAT WE PROVIDE</Typography>
                       </Box>
                       <Box sx={{display:"flex", justifyContent:"center",pt:"20px"}}>
                           <Typography  sx={{border:"3px solid #FFA61B",width:"100px"}}></Typography>
                       </Box>



               <Grid item container xs={12} sx={{display:"flex" , justifyContent:"center"}}>
                 <Grid xs={12} sm={8} md={6} lg={4} sx={{display:"flex" , justifyContent:"center",pt:"50px"}}>
                 <Card  sx={{ maxWidth: 345 ,"&:hover": {boxShadow:"1px 1px 30px  #93979B"}}}>
                             <CardActionArea sx={{width:"100%",backgroundColor:"#F9F9FF","&:hover": {backgroundColor: "#FFFFFF"}}}>
                                 <Box sx={{mt:"50px"}}>
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                          <img src={whatprovid1}></img>
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"24px",pt:"10px",fontWeight:"600"}}>SEO</Typography>
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
                                           <Button sx={{ mt: "30px", px:"20px", py: "10px", border: "2px solid #6F0AC8", backgroundColor: "#fff", color: "#6F0AC8", cursor: "pointer", fontSize: "14px", ":hover": { backgroundColor: "#6F0AC8", color: "white" } }}>
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
                                          <img src={whatprovid2}></img>
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"24px",pt:"10px",fontWeight:"600"}}>Content Marketing</Typography>
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
                                           <Button sx={{ mt: "30px", px:"20px", py: "10px", border: "2px solid #6F0AC8", backgroundColor: "#fff", color: "#6F0AC8", cursor: "pointer", fontSize: "14px", ":hover": { backgroundColor: "#6F0AC8", color: "white" } }}>
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
                                          <img src={whatprovid3}></img>
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"24px",pt:"10px",fontWeight:"600"}}>Data Analysis</Typography>
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
                                           <Button sx={{ mt: "30px", px:"20px", py: "10px", border: "2px solid #6F0AC8", backgroundColor: "#fff", color: "#6F0AC8", cursor: "pointer", fontSize: "14px", ":hover": { backgroundColor: "#6F0AC8", color: "white" } }}>
                                             Read more
                                           </Button>
                                      </Box>
                                     </Box>
                                     </Box>
                           
                             </CardActionArea>
                  </Card>

                 </Grid>


               
             
             </Grid>

                  
             <Grid item container xs={12} sx={{display:"flex" , justifyContent:"center"}}>
                 <Grid xs={12} sm={8} md={6} lg={4} sx={{display:"flex" , justifyContent:"center",pt:"50px"}}>
                 <Card  sx={{ maxWidth: 345 ,"&:hover": {boxShadow:"1px 1px 30px  #93979B"}}}>
                             <CardActionArea sx={{width:"100%",backgroundColor:"#F9F9FF","&:hover": {backgroundColor: "#FFFFFF"}}}>
                                 <Box sx={{mt:"50px"}}>
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                          <img src={whatprovid4}></img>
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"24px",pt:"10px",fontWeight:"600"}}>Digital Marketing</Typography>
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
                                           <Button sx={{ mt: "30px", px:"20px", py: "10px", border: "2px solid #6F0AC8", backgroundColor: "#fff", color: "#6F0AC8", cursor: "pointer", fontSize: "14px", ":hover": { backgroundColor: "#6F0AC8", color: "white" } }}>
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
                                          <img src={whatprovid5}></img>
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"24px",pt:"10px",fontWeight:"600"}}>Web Analytics</Typography>
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
                                           <Button sx={{ mt: "30px", px:"20px", py: "10px", border: "2px solid #6F0AC8", backgroundColor: "#fff", color: "#6F0AC8", cursor: "pointer", fontSize: "14px", ":hover": { backgroundColor: "#6F0AC8", color: "white" } }}>
                                             Read more
                                           </Button>
                                      </Box>
                                     </Box>
                                     </Box>
                           
                             </CardActionArea>
                  </Card>

                 </Grid>



                 <Grid xs={12} sm={8} md={6} lg={4} sx={{display:"flex" , justifyContent:"center",pt:"50px"}}>
                 <Card  sx={{ maxWidth: 345 ,"&:hover": {boxShadow:"1px 1px 30px  #93979B"}
                 }}>
                             <CardActionArea sx={{width:"100%",backgroundColor:"#F9F9FF","&:hover": {backgroundColor: "#FFFFFF"}}}>
                                 <Box sx={{mt:"50px"}}>
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                          <img src={whatprovid6}></img>
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"24px",pt:"10px",fontWeight:"600"}}>Social Marketing</Typography>
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
                                           <Button sx={{ mt: "30px", px:"20px", py: "10px", border: "2px solid #6F0AC8", backgroundColor: "#fff", color: "#6F0AC8", cursor: "pointer", fontSize: "14px", ":hover": { backgroundColor: "#6F0AC8", color: "white" } }}>
                                             Read more
                                           </Button>
                                      </Box>
                                     </Box>
                                     </Box>
                             </CardActionArea>
                  </Card>
                 </Grid>
             </Grid>





             <Grid item container xs={12} sx={{display:"flex" , justifyContent:"center"}}>
                 <Grid xs={12} sm={5} md={6} lg={3} sx={{display:"flex" , justifyContent:"center",pt:"50px"}}>
                       <Box>
                                 <Box sx={{mt:"50px"}}>
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                          <DesktopWindowsOutlinedIcon sx={{fontSize:"60px",color:"#FFA61B"}}/>          
                                     </Box>
                                 </Box>

                                 <Box >
                                   <Box ref={ref} sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "70px", }} >
                                       <Typography sx={{ fontSize: "35px",fontWeight:"800"}}>
                                          {startCounting ? <CountUp end={9250} duration={2} /> : "0"}  +
                                       </Typography>
                                   </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"16px",fontFamily: 'Rubik, sans-serif',fontWeight:"600",display:"flex",textAlign:"center"}}>Completed Projects</Typography>
                                     </Box>
                                 </Box>
                                 </Box>
                  

                 </Grid>


                 <Grid xs={12} sm={5} md={6} lg={3} sx={{display:"flex" , justifyContent:"center",pt:"50px"}}>
                       <Box>
                                 <Box sx={{mt:"50px"}}>
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                          <GroupsIcon sx={{fontSize:"60px",color:"#FFA61B"}}/>          
                                     </Box>
                                 </Box>

                                 <Box >
                                 <Box ref={ref} sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "70px", }} >
                                       <Typography sx={{ fontSize: "35px",fontWeight:"800"}}>
                                          {startCounting ? <CountUp end={1250} duration={2} /> : "0"}  +
                                       </Typography>
                                   </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"16px",fontFamily: 'Rubik, sans-serif',fontWeight:"600",display:"flex",textAlign:"center"}}>Satisfied Clients</Typography>
                                     </Box>
                                 </Box>
                                 </Box>
                  

                 </Grid>

                 <Grid xs={12} sm={5} md={6} lg={3} sx={{display:"flex" , justifyContent:"center",pt:"50px"}}>
                       <Box>
                                 <Box sx={{mt:"50px"}}>
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                          <InsertChartOutlinedRoundedIcon sx={{fontSize:"60px",color:"#FFA61B"}}/>          
                                     </Box>
                                 </Box>

                                 <Box >
                                 <Box ref={ref} sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "70px", }} >
                                       <Typography sx={{ fontSize: "35px",fontWeight:"800"}}>
                                          {startCounting ? <CountUp end={8500} duration={2} /> : "0"}  +
                                       </Typography>
                                   </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"16px",fontFamily: 'Rubik, sans-serif',fontWeight:"600",display:"flex",textAlign:"center"}}>Keywords Rank</Typography>
                                     </Box>
                                 </Box>
                                 </Box>
                  

                 </Grid>


                 <Grid xs={12} sm={5} md={6} lg={3} sx={{display:"flex" , justifyContent:"center",pt:"50px"}}>
                       <Box>
                                 <Box sx={{mt:"50px"}}>
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                      <i style={{fontSize:"50px",color:"#FFA61B"}} class="fa-solid fa-medal"></i>        
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box ref={ref} sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "70px", }} >
                                       <Typography sx={{ fontSize: "35px",fontWeight:"800"}}>
                                          {startCounting ? <CountUp end={18} duration={2} /> : "0"}  +
                                       </Typography>
                                     </Box>
                                 </Box>

                                 <Box >
                                      <Box sx={{display:"flex",justifyContent:"center"}}>
                                        <Typography sx={{fontSize:"16px",fontFamily: 'Rubik, sans-serif',fontWeight:"600",display:"flex",textAlign:"center"}}>Awards Won</Typography>
                                     </Box>
                                 </Box>
                                 </Box>
                  

                 </Grid>

             </Grid>
             </Container>
                
         </Box>
  )
}

export default Whoteprovid