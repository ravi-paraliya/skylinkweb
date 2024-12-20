import React from 'react'
import { Box, Button,InputBase,FormControl, OutlinedInput,Container,Paper,  Grid, Typography,IconButton} from '@mui/material';
import blog1 from '../../imges/blog/blog1.jpg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import avtar1 from '../../imges/blog/blog-small-1.png'
import avtar2 from '../../imges/blog/blog-small-2.png'
import avtar3 from '../../imges/blog/blog-small-3.png'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CropPortraitOutlinedIcon from '@mui/icons-material/CropPortraitOutlined';
import { Navigate, useNavigate } from 'react-router-dom';



const Search = styled('div')(({ theme }) => ({
     position: 'relative',
     borderRadius: theme.shape.borderRadius,
     backgroundColor: alpha(theme.palette.common.white, 0.15),
     '&:hover': {
       backgroundColor: alpha(theme.palette.common.white, 0.25),
     },
     marginLeft: 0,
     width: '100%',
     [theme.breakpoints.up('sm')]: {
       marginLeft: theme.spacing(1),
       width: 'auto',
     },
   }));
   
   const SearchIconWrapper = styled('div')(({ theme }) => ({
     padding: theme.spacing(0, 2),
     height: '100%',
     position: 'absolute',
     pointerEvents: 'none',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
   }));
 
 const StyledInputBase = styled(InputBase)(({ theme }) => ({
     color: 'inherit',
     '& .MuiInputBase-input': {
       padding: theme.spacing(1, 1, 1, 0),
       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
       transition: theme.transitions.create('width'),
       width: '100%',
       [theme.breakpoints.up('md')]: {
         width: '100%',
       },
     },
   }));
 

function Blogdetail() {

  const navigate=useNavigate()

  return (
    <Box>
    <Container maxWidth="lg">
      <Grid container spacing={8} sx={{mt:{lg:"50px",md:"30px",sm:"10px",xs:"10px"}}}>
        <Grid item xs={12} md={8}>
            <Box>
                 <Box>
                      <img src={blog1} alt="" style={{ height: "100%", width: "100%"}} />
                 </Box>

                 <Box>
                      <Typography sx={{fontSize:"14px",fontFamily:'Rubik, sans-serif',color:"#747774",py:"20px"}}>21 Aug, 2018 - By Adam helen</Typography>
                 </Box>

                 <Box>
                      <Typography sx={{fontSize:"29px",fontWeight:"600",fontFamily: 'Poppins, sans-serif',color:"#575757"}}>Survival Strategies To Ensure Business Domination</Typography>
                 </Box>

                 <Box>
                      <Typography sx={{py:"20px",fontSize:"16.5px",color:"#666666",fontFamily:'Rubik, sans-serif',lineHeight:"30px"}}>Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor incididunt ut labore et dolore magna. We provide innovative solutions with the best. Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor incididunt ut labore et dolore magna.</Typography>
                 </Box>
                 <Box sx={{borderLeft:"3px solid orange",backgroundColor:"#F8FCF7",my:"20px"}}>
                      <Typography sx={{p:"40px",fontSize:"18.5px",fontFamily: 'Rubik, sans-serif'}}>we supplements its own ultra-modern fleet and network with an extensive network of subcontractors and partners who work under the responsibility and control. Contrary to popular belief, Lorem Ipsum is not simply random text.</Typography>
                 </Box>

                 <Box >
                      <Typography sx={{py:"20px",fontSize:"16.5px",fontFamily: 'Rubik, sans-serif',color:"#666666",lineHeight:"32px"}}>Our main focus is sustainable tourism and how it can help local economy while preserving natural and cultural heritage. Our team of experts has wide experience in fields of cultural heritage marketing, tourism strategic planning, destination marketing and assessment and environmental influence research.</Typography>
                 </Box>
                 <Box sx={{ display: "flex",flexDirection: { xs: "column", sm: "row" }, py: "20px",gap: 2,}}>
                  <Button onClick={() => navigate('/bolgdetailspage1')} sx={{ height: "60px", width: { xs: "100%", sm: "130px" },  borderRadius: "30px", backgroundColor: "#275BAA", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", }} >
                           <i className="fa-brands fa-facebook-f" style={{ color: "white", fontSize: "14px" }}></i>
                              <Typography sx={{fontSize: "16px",color: "white",textTransform: "lowercase",fontFamily: 'Rubik, sans-serif',}}>Share</Typography>
                  </Button>

                  <Button onClick={() => navigate('/bolgdetailspage1')} sx={{ height: "60px", width: { xs: "100%", sm: "130px" }, borderRadius: "30px", backgroundColor: "#28C8F0", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", }}>
                     <TwitterIcon sx={{ color: "white", fontSize: "18px" }} />
                     <Typography sx={{ fontSize: "16px", color: "white", textTransform: "lowercase", fontFamily: 'Rubik, sans-serif', }} > Tweet </Typography>
                  </Button>

                  <Button onClick={() => navigate('/bolgdetailspage1')} sx={{ height: "60px", width: { xs: "100%", sm: "130px" },  borderRadius: "30px", backgroundColor: "#D6061E", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", }} >
                     <PinterestIcon sx={{ color: "white", fontSize: "18px" }} />
                     <Typography sx={{ fontSize: "16px", color: "white", textTransform: "lowercase", fontFamily: 'Rubik, sans-serif', }} > Pinterest </Typography>
                 </Button>
                  </Box>

                 <Box sx={{ my: "30px", p: "30px", display: "flex", flexDirection: { xs: "column", sm: "row" }, backgroundColor: "#F7F7F7", gap: 3, }} >
                      <Box sx={{display: "flex",justifyContent: { lg: "center", sm: "start", md: "start", xs: "center" }}}>
                        <img src={avtar1} style={{ width: "100px", height:"100px", maxWidth: "150px" }}/>
                      </Box>
                      <Box >
                        <Typography sx={{ fontSize: "18px", fontWeight: "600", fontFamily: 'Poppins, sans-serif', display:"flex", justifyContent:{lg: "start", sm: "start", md: "start", xs: "center"} }} >
                        Shahriar Hossain
                        </Typography>
                        <Typography sx={{ mt: "10px", fontFamily: 'Rubik, sans-serif', fontSize: "16px", lineHeight: "28px", color: "#484848", }} >
                        Mauna Loa, the biggest volcano on Earth and one of the most active covers half the Island of Just 35 miles to the northeast, Mauna Kea, known to native Hawaiians as Mauna a Wakea, rises 14,000 feet above sea level. To them it represents a spiritual.
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "start" },  }} >
                       <Typography sx={{ color: "#283659", fontSize: "21px", fontWeight: "700", fontFamily: 'Poppins, sans-serif', textAlign: { xs: "center", sm: "left" }}} >Comments (02)</Typography>
                       <Typography sx={{ border: "2px solid #6F0AC8", width: "75px", mt: "5px", alignSelf: { xs: "center", sm: "flex-start" },  }} ></Typography>
                    </Box>
                    
                 <Box sx={{ my: "30px", p: "30px", display: "flex", flexDirection: { xs: "column", sm: "row" }, backgroundColor: "#F7F7F7", gap: 3, }} >
                      <Box sx={{display: "flex",justifyContent: { lg: "center", sm: "start", md: "start", xs: "center" }}}>
                        <img src={avtar2} style={{ width: "100px", height:"100px", maxWidth: "150px" }}/>
                      </Box>
                      <Box >
                        <Typography sx={{ fontSize: "18px", fontWeight: "600", fontFamily: 'Poppins, sans-serif', display:"flex", justifyContent:{lg: "start", sm: "start", md: "start", xs: "center"} }} >
                          Gerald Rishel
                        </Typography>
                        <Typography sx={{ color: "#8b8b8b", fontSize: "15px", fontFamily: 'Rubik, sans-serif', py: "5px", display:"flex", justifyContent:{lg: "start", sm: "start", md: "start", xs: "center"} }} >
                          August 25, 2018
                        </Typography>
                        <Typography sx={{ mt: "10px", fontFamily: 'Rubik, sans-serif', fontSize: "16px", lineHeight: "28px", color: "#484848", }} >
                          Energistically optimize installed base channels after open-source sources. Continually repurpose team-driven markets via long-term high-impact imperatives.
                        </Typography>
                      </Box>
                    </Box>



                    <Box sx={{ my: "30px", p: "30px", display: "flex", flexDirection: { xs: "column", sm: "row" }, backgroundColor: "#F7F7F7", gap: 3, }} >
                      <Box sx={{display: "flex",justifyContent: { lg: "center", sm: "start", md: "start", xs: "center" }}}>
                        <img src={avtar3} style={{ width: "100px", height:"100px", maxWidth: "150px" }}/>
                      </Box>
                      <Box >
                        <Typography sx={{ fontSize: "18px", fontWeight: "600", fontFamily: 'Poppins, sans-serif', display:"flex", justifyContent:{lg: "start", sm: "start", md: "start", xs: "center"} }} >
                          Gerald Rishel
                        </Typography>
                        <Typography sx={{ color: "#8b8b8b", fontSize: "15px", fontFamily: 'Rubik, sans-serif', py: "5px", display:"flex", justifyContent:{lg: "start", sm: "start", md: "start", xs: "center"} }} >
                          August 25, 2018
                        </Typography>
                        <Typography sx={{ mt: "10px", fontFamily: 'Rubik, sans-serif', fontSize: "16px", lineHeight: "28px", color: "#484848", }} >
                          Energistically optimize installed base channels after open-source sources. Continually repurpose team-driven markets via long-term high-impact imperatives.
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "start" },  }} >
                       <Typography sx={{ color: "#283659", fontSize: "21px", fontWeight: "700", fontFamily: 'Poppins, sans-serif', textAlign: { xs: "center", sm: "left" },  }} > LEAVE A REPLY </Typography>
                       <Typography sx={{ border: "2px solid #6F0AC8", width: "75px", mt: "5px", alignSelf: { xs: "center", sm: "flex-start" },  }} ></Typography>
                    </Box>


                 <Box>
                           <Box sx={{display:"flex",mt:"40px"}} gap={5}>
                                 <FormControl sx={{ width: '100%' }}>
                                           <OutlinedInput  placeholder="Your Name" type="email"  sx={{height: '50px',color: '#757575'}} 
                                           inputProps={{sx: {'&::placeholder': {color: '#757575',opacity: 1}}}}/>
                                 </FormControl>

                                 <FormControl sx={{ width: '100%' }}>
                                          <OutlinedInput  placeholder="Your Email" type="email"  sx={{height: '50px',color: '#757575'}} 
                                           inputProps={{sx: {'&::placeholder': {color: '#757575',opacity: 1}}}}/>
                                 </FormControl> 

                           </Box>
                           <FormControl sx={{ width: '100%', mt: '10px' }}>
                              <OutlinedInput 
                               placeholder="Write your message" sx={{height: '150px',  display: 'flex',  alignItems: 'start',  padding: '0 14px', color: "#757575"  }} 
                               inputProps={{sx: {'&::placeholder': {color: '#757575',opacity: 1 }}
                               }}/>
                           </FormControl>
                 </Box>

                 
           <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "start" },  mt: "30px", mb: "10px"}}>
             <Button className="buttons" sx={{ fontSize: "18px", display: "flex", justifyContent: "center", width: "250px", height: "45px", backgroundColor: "orange", cursor: "pointer", color: "white", fontWeight: "600", }} > POST COMMENT </Button>
           </Box>
            </Box>
        </Grid>
  
        <Grid item xs={12} md={4}>
            <Box>
            <Box sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100%' }}>
                    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', justifyContent:"center", width: '100%', maxWidth: 400, backgroundColor: 'white', boxShadow: 2, border:"1px solid #ccc7c7" }} >
                    <StyledInputBase placeholder="Search…" color='#798082' inputProps={{ 'aria-label': 'search' }} sx={{ ml: 1, flex: 1 ,width:"100%"}} />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                    </IconButton>
                    </Paper>

              </Box>
                    <Typography sx={{py:"30px",color:"#283659",fontSize:"18px",fontWeight:"600",fontFamily: 'Poppins, sans-serif'}}>Popular Posts</Typography>
                      <Box sx={{display:"flex"}} gap={3}>
                                  <Box>
                                       <img src={avtar1} style={{borderRadius:"50%",height:"70px"}}/>
                                  </Box>
                                  <Box>
                                            <Typography sx={{fontSize:"16px",color:"#283659",fontWeight:"600",lineHeight:"16px",fontFamily:'Rubik, sans-serif'}}>Make a great business community</Typography>
                                            <Typography sx={{fontSize:"16px",pt:"10px",color:"#8c8c8c",fontFamily:'Rubik, sans-serif'}}>2 days ago</Typography>
                                </Box>
                      </Box>

                      <Box sx={{display:"flex",mt:"25px"}} gap={3}>
                                  <Box>
                                       <img src={avtar2} style={{borderRadius:"50%",height:"70px"}}/>
                                  </Box>
                                  <Box>
                                            <Typography sx={{fontSize:"16px",color:"#283659",fontWeight:"600",lineHeight:"16px",fontFamily:'Rubik, sans-serif'}}>Make a great business community</Typography>
                                            <Typography sx={{fontSize:"16px",pt:"10px",color:"#8c8c8c",fontFamily:'Rubik, sans-serif'}}>2 days ago</Typography>
                                </Box>
                      </Box>

                      <Box sx={{display:"flex",mt:"25px"}} gap={3}>
                                  <Box>
                                       <img src={avtar3} style={{borderRadius:"50%",height:"70px"}}/>
                                  </Box>
                                  <Box>
                                            <Typography sx={{fontSize:"16px",color:"#283659",fontWeight:"600",lineHeight:"16px",fontFamily:'Rubik, sans-serif'}}>Make a great business community</Typography>
                                            <Typography sx={{fontSize:"16px",pt:"10px",color:"#8c8c8c",fontFamily:'Rubik, sans-serif'}}>2 days ago</Typography>
                                </Box>
                      </Box>

                      <Typography sx={{fontWeight:"700",py:"20px",color:"#283659",fontFamily: 'Poppins, sans-serif',fontSize:"19px"}}>Category</Typography>
                      <Box onClick={() => navigate('/bolgdetailspage1')} sx={{height:"100%",width:{xs:"250px",md:"300px",sm:"200px",lg:"340px"},backgroundColor:"#F7F7FC",p:"20px",display:"flex"}}>
                              <CropPortraitOutlinedIcon sx={{fontSize:"16px",color:"#666666"}}/>  
                              <Typography sx={{fontSize:"16px",fontFamily:'Rubik, sans-serif',fontWeight:"600"}}>Content Marketing</Typography>  
                      </Box>

                      <Box onClick={() => navigate('/bolgdetailspage1')} sx={{height:"100%",width:{xs:"250px",md:"300px",sm:"200px",lg:"340px"},backgroundColor:"#F7F7FC",p:"20px",display:"flex",mt:"5px"}}>
                              <CropPortraitOutlinedIcon sx={{fontSize:"16px",color:"#666666"}}/>  
                              <Typography sx={{fontSize:"16px",fontFamily:'Rubik, sans-serif',fontWeight:"600"}}>Data Analysis</Typography>  
                      </Box>
                      
                      <Box onClick={() => navigate('/bolgdetailspage1')} sx={{height:"100%",width:{xs:"250px",md:"300px",sm:"200px",lg:"340px"},backgroundColor:"#F7F7FC",p:"20px",display:"flex",mt:"5px"}}>
                              <CropPortraitOutlinedIcon sx={{fontSize:"16px",color:"#666666"}}/>  
                              <Typography sx={{fontSize:"16px",fontFamily:'Rubik, sans-serif',fontWeight:"600"}}>Digital Marketing</Typography>  
                      </Box>
                      
                      <Box onClick={() => navigate('/bolgdetailspage1')} sx={{height:"100%",width:{xs:"250px",md:"300px",sm:"200px",lg:"340px"},backgroundColor:"#F7F7FC",p:"20px",display:"flex",mt:"5px"}}>
                              <CropPortraitOutlinedIcon sx={{fontSize:"16px",color:"#666666"}}/>  
                              <Typography sx={{fontSize:"16px",fontFamily:'Rubik, sans-serif',fontWeight:"600"}}>Web Analytics</Typography>  
                      </Box>
                      
                      <Box onClick={() => navigate('/bolgdetailspage1')} sx={{height:"100%",width:{xs:"250px",md:"300px",sm:"200px",lg:"340px"},backgroundColor:"#F7F7FC",p:"20px",display:"flex",mt:"5px"}}>
                              <CropPortraitOutlinedIcon sx={{fontSize:"16px",color:"#666666"}}/>  
                              <Typography sx={{fontSize:"16px",fontFamily:'Rubik, sans-serif',fontWeight:"600"}}>Social Marketing</Typography>  
                      </Box>
                      
                      <Box onClick={() => navigate('/bolgdetailspage1')} sx={{height:"100%",width:{xs:"250px",md:"300px",sm:"200px",lg:"340px"},backgroundColor:"#F7F7FC",p:"20px",display:"flex",mt:"5px"}}>
                              <CropPortraitOutlinedIcon sx={{fontSize:"16px",color:"#666666"}}/>  
                              <Typography sx={{fontSize:"16px",fontFamily:'Rubik, sans-serif',fontWeight:"600"}}>Great Speakers</Typography>  
                      </Box>
            </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
  
  )
}

export default Blogdetail

