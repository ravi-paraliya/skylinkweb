import React from 'react'
import { Box, Typography,Grid, Container, Avatar, colors } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LanguageIcon from '@mui/icons-material/Language';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import letestpost1 from '../../../src/imges/home/letestpost1.jpg'
import letestpost2 from '../../../src/imges/home/letestpost2.jpg'
import letestpost3 from '../../../src/imges/home/letestpost3.jpg'
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import avtar1 from '../../imges/home/avtar1.png'
import avtar2 from '../../imges/home/avtar2.png'
import avtar3 from '../../imges/home/avtar3.png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function Latestpost() {
  return (
    <Box sx={{backgroundColor:"#F9F9FF",height:"100%"}}>

    <Container maxWidth="lg">
            <Box sx={{display:"flex", justifyContent:"center",pt:{xs:"10px" , lg:"100px"}}}>
                <Typography sx={{fontWeight:"800",color:"#93979B"}}>Our Blog</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center",pt:"5px"}}>
            <Typography sx={{fontWeight: "800",color: "#373737",fontSize:{ xs: "24px", lg: "32px" }}}>Latest Blog Posts</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center",pt:"20px"}}>
                <Typography  sx={{border:"3px solid #FFA61B",width:"100px"}}></Typography>
            </Box>


    <Grid item container xs={12} sx={{display:"flex" , justifyContent:"center"}}>
      <Grid xs={12} sm={8} md={6} lg={4} sx={{display:"flex" , justifyContent:"center",pt:"50px"}}>
      <Card  sx={{ maxWidth: 345 ,"&:hover": {boxShadow:"1px 1px 30px  #93979B"}}}>
                  <CardActionArea sx={{width:"100%",backgroundColor:"#F9F9FF","&:hover": {backgroundColor: "#FFFFFF"}}}>
                  
                           <Box sx={{display:"flex",justifyContent:"center"}}>
                               <img src={letestpost1} width={"100%"}/>
                          </Box>
                      

                   
                           <Box sx={{pl:"20px"}}>
                             <Typography sx={{fontSize:"12px",pt:"20px",fontFamily:'Rubik, sans-serif',color:"#FFA61B",fontWeight:"600"}}>19 Jul 2019</Typography>
                          </Box>
                   

                    
                           <Box sx={{display:"flex",justifyContent:"center"}}>
                             <Typography sx={{fontSize:"25px",fontWeight:"600",fontFamily: 'Poppins, sans-serif',pl:"20px",pt:"5px",display:"flex",textAlign:"start"}}>WHY GOOD DESIGNERS ARE LIKE CROCODIES</Typography>
                          </Box>
                    
                    
                    
                           <Box sx={{display:"flex",justifyContent:"center",pt:"20px"}}>
                             <Typography sx={{fontSize:"17px",color:"#575D69",pt:"10px",fontFamily:'Rubik, sans-serif',pl:"20px",pt:"5px",display:"flex",textAlign:"start"}}>Nulla metus ullamcorper vel tincidunt sed euismod nibh quisque volutpat.</Typography>
                          </Box>
                  

                      
                         <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",pt:"20px",pb:"30px"}}>
                               <Box sx={{display:"flex",alignItems:"center",gap:"20px"}}> 
                                 <Avatar alt="Remy Sharp" src={avtar1} sx={{borderRadius:"50%"}}/>
                                 <Typography sx={{fontSize:"12px",}}>BY :<span style={{color:"#FFA61B"}}>ADMIN</span></Typography>
                               </Box>
                               <Box>
                                    <Typography sx={{display: "flex",alignItems: "center",fontSize: "10px","&:hover":{color:"orange"},"&:hover .run": {display: "none"},"&:hover .forward": {  display: "inline-block"}}}>
                                      <ArrowRightIcon className="run" sx={{ color: "orange" }} />
                                        Read More
                                      <ArrowForwardIosOutlinedIcon className="forward" sx={{ fontSize: "10px", pt: "2px", color: "orange", display: "none" }} />
                                    </Typography>
                               </Box>
                        </Box>
                  </CardActionArea>
       </Card>

      </Grid>

      <Grid xs={12} sm={8} md={6} lg={4} sx={{display:"flex" , justifyContent:"center",pt:"50px"}}>
      <Card  sx={{ maxWidth: 345 ,"&:hover": {boxShadow:"1px 1px 30px  #93979B"}}}>
                  <CardActionArea sx={{width:"100%",backgroundColor:"#F9F9FF","&:hover": {backgroundColor: "#FFFFFF"}}}>
                  
                           <Box sx={{display:"flex",justifyContent:"center"}}>
                               <img src={letestpost2} width={"100%"}/>
                          </Box>
                      

                   
                           <Box sx={{pl:"20px"}}>
                             <Typography sx={{fontSize:"12px",pt:"20px",fontFamily:'Rubik, sans-serif',color:"#FFA61B",fontWeight:"600"}}>19 Jul 2019</Typography>
                          </Box>
                   

                    
                           <Box sx={{display:"flex",justifyContent:"center"}}>
                             <Typography sx={{fontSize:"25px",fontWeight:"600",fontFamily: 'Poppins, sans-serif',pl:"20px",pt:"5px",display:"flex",textAlign:"start"}}>WHY GOOD DESIGNERS ARE LIKE CROCODIES</Typography>
                          </Box>
                    
                    
                    
                           <Box sx={{display:"flex",justifyContent:"center",pt:"20px"}}>
                             <Typography sx={{fontSize:"17px",color:"#575D69",pt:"10px",fontFamily:'Rubik, sans-serif',pl:"20px",pt:"5px",display:"flex",textAlign:"start"}}>Nulla metus ullamcorper vel tincidunt sed euismod nibh quisque volutpat.</Typography>
                          </Box>
                  

                      
                         <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",pt:"20px",pb:"30px"}}>
                               <Box sx={{display:"flex",alignItems:"center",gap:"20px"}}> 
                                 <Avatar alt="Remy Sharp" src={avtar2} sx={{borderRadius:"50%"}}/>
                                 <Typography sx={{fontSize:"12px",}}>BY :<span style={{color:"#FFA61B"}}>ADMIN</span></Typography>
                               </Box>
                               <Box>
                                    <Typography sx={{display: "flex",alignItems: "center",fontSize: "10px","&:hover":{color:"orange"},"&:hover .run": {display: "none"},"&:hover .forward": {  display: "inline-block"}}}>
                                      <ArrowRightIcon className="run" sx={{ color: "orange" }} />
                                        Read More
                                      <ArrowForwardIosOutlinedIcon className="forward" sx={{ fontSize: "10px", pt: "2px", color: "orange", display: "none" }} />
                                    </Typography>
                               </Box>
                        </Box>
                  </CardActionArea>
       </Card>

      </Grid>

      <Grid xs={12} sm={8} md={6} lg={4} sx={{display:"flex" , justifyContent:"center",pt:"50px"}}>
      <Card  sx={{ maxWidth: 345 ,"&:hover": {boxShadow:"1px 1px 30px  #93979B"}}}>
                  <CardActionArea sx={{width:"100%",backgroundColor:"#F9F9FF","&:hover": {backgroundColor: "#FFFFFF"}}}>
                  
                           <Box sx={{display:"flex",justifyContent:"center"}}>
                               <img src={letestpost3} width={"100%"}/>
                          </Box>
                      

                   
                           <Box sx={{pl:"20px"}}>
                             <Typography sx={{fontSize:"12px",pt:"20px",fontFamily:'Rubik, sans-serif',color:"#FFA61B",fontWeight:"600"}}>19 Jul 2019</Typography>
                          </Box>
                   

                    
                           <Box sx={{display:"flex",justifyContent:"center"}}>
                             <Typography sx={{fontSize:"25px",fontWeight:"600",fontFamily: 'Poppins, sans-serif',pl:"20px",pt:"5px",display:"flex",textAlign:"start"}}>WHY GOOD DESIGNERS ARE LIKE CROCODIES</Typography>
                          </Box>
                    
                    
                    
                           <Box sx={{display:"flex",justifyContent:"center",pt:"20px"}}>
                             <Typography sx={{fontSize:"17px",color:"#575D69",pt:"10px",fontFamily:'Rubik, sans-serif',pl:"20px",pt:"5px",display:"flex",textAlign:"start"}}>Nulla metus ullamcorper vel tincidunt sed euismod nibh quisque volutpat.</Typography>
                          </Box>
                  

                      
                         <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",pt:"20px",pb:"30px"}}>
                               <Box sx={{display:"flex",alignItems:"center",gap:"20px"}}> 
                                 <Avatar alt="Remy Sharp" src={avtar3} sx={{borderRadius:"50%"}}/>
                                 <Typography sx={{fontSize:"12px",}}>BY :<span style={{color:"#FFA61B"}}>ADMIN</span></Typography>
                               </Box>
                               <Box>
                                    <Typography sx={{display: "flex",alignItems: "center",fontSize: "10px","&:hover":{color:"orange"},"&:hover .run": {display: "none"},"&:hover .forward": {  display: "inline-block"}}}>
                                      <ArrowRightIcon className="run" sx={{ color: "orange" }} />
                                        Read More
                                      <ArrowForwardIosOutlinedIcon className="forward" sx={{ fontSize: "10px", pt: "2px", color: "orange", display: "none" }} />
                                    </Typography>
                               </Box>
                        </Box>
                  </CardActionArea>
       </Card>

      </Grid>


  </Grid>

  </Container>
     
</Box>
  )
}

export default Latestpost