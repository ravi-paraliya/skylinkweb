import React from 'react'
import { Box,InputBase, IconButton,Button, Paper, Container, Typography,Grid } from '@mui/material';
import aboutusbody from '../../imges/aboutus/aboutusbody.jpg'
import HouseIcon from '@mui/icons-material/House';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Navigate ,useNavigate  } from 'react-router-dom';

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

function Pagenotfound() {

   const Navigate=useNavigate()

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
                }}> 404 </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "20px", alignItems: "center" }}>
                <HouseIcon sx={{ color: "#E3951B", fontSize: "22px", marginRight: "5px" }} />
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" sx={{ color: "white", fontWeight: "600" }} href="/"></Link>
                    <Typography sx={{ color: '#DDE4FF', fontFamily: 'Rubik, sans-serif' }}> 404</Typography>
                </Breadcrumbs>
            </Box>
        </Box>
    </Box>

    <Container maxWidth="lg">
  <Box sx={{ width: "100%", height: "100%"}}>
       
            <Box>
                   <Typography sx={{display: "flex",justifyContent:"center",height:"200px",fontSize:"150px",color:"#FF922D",fontWeight:"700",fontFamily: 'Poppins, sans-serif',mt:{lg:"100px"}}}>404</Typography>
                   <Typography sx={{display: "flex",justifyContent:"center",fontSize:"24px",color:"#4A4A4A",fontWeight:"600",fontFamily: 'Poppins, sans-serif'}}>Page Not Found</Typography>
             <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100%' }}>
                    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', justifyContent:"center", width: '100%', maxWidth: 400, backgroundColor: 'white', boxShadow: 2, border:"1px solid #ccc7c7" }} >
                    <StyledInputBase placeholder="Search…" color='#798082' inputProps={{ 'aria-label': 'search' }} sx={{ ml: 1, flex: 1 ,width:"100%"}} />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                    </IconButton>
                    </Paper>
              </Box>

              <Button onClick={() => Navigate('/homepages1')} className='buttons' sx={{marginTop: "15px",display: "flex",justifyContent: "center", alignItems: "center",height: "60px",mt: "30px",fontSize: "18px",width: "280px",mb: "10px",border: "1px solid orange",borderRadius: "0px",backgroundColor: "#FFA61B",cursor: "pointer",color: "white",fontWeight: "600",mx: "auto" }}>BACK TO HOMEPAGE</Button>


      
</Box>
                 
  </Box>
</Container>

</Box>
  )
}

export default Pagenotfound