import React from 'react'
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import Agency1 from '../../../src/imges/home/Agency1.jpg'
import TurnSlightRightIcon from '@mui/icons-material/TurnSlightRight';
import TwitterIcon from '@mui/icons-material/Twitter';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import { useNavigate } from 'react-router-dom';

function Seoservice1() {
    const navigate=useNavigate()
  return (
    <Box sx={{backgroundColor:"#6F0AC8",mt:"30px"}}>
    <Box sx={{display:{lg:"flex",md:"block",xs:"block"},justifyContent:"space-around",py:5,alignItems:"center"}}>
      <Typography variant='h5' sx={{fontWeight:"600",fontFamily: "Poppins, sans-serif",color:"#F7F7F7",textAlign:{md:"center",sm:"center",xs:"center"},py:{sm:1}}}>Do you need SEO & Digital Marketing Services</Typography>
      <Box sx={{display:"flex",justifyContent:{xs:"center"},py:{xs:2}}}>
        <Button onClick={() => navigate('/contactpage1')} sx={{backgroundColor:"#F1E7FA",borderRadius:"0px",color:"#6F0AC8",fontWeight:"600","&:hover":{color:"black"}}}>CONTACT US</Button>
      </Box>
    </Box>
</Box>

  )
}

export default Seoservice1