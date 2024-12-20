import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import gallery1 from '../../imges/pages/gallery-img1.jpg'
import gallery2 from '../../imges/pages/gallery-img2.jpg'
import gallery3 from '../../imges/pages/gallery-img3.jpg'
import SearchIcon from '@mui/icons-material/Search';
import gallery4 from '../../imges/pages/gallery-img4.jpg'
import gallery5 from '../../imges/pages/gallery-img5.jpg'
import gallery6 from '../../imges/pages/gallery-img6.jpg'
import gallery7 from '../../imges/pages/gallery-img7.jpg'
import gallery8 from '../../imges/pages/gallery-img8.jpg'
import gallery9 from '../../imges/pages/gallery-img9.jpg'

function Gallery() {
  return (
    <Box>
    <Container maxWidth='lg'>
          <Grid container item xs={12} mt={5} spacing={4}>
          <Grid item xs={12} sm={8} md={6} lg={4}>
                     <Box sx={{display: "flex",justifyContent: "center",alignItems: "center",backgroundImage: `url(${gallery1})`,width: "100%",height: "300px", backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",transition: "transform 0.6s ease-in-out",overflow: "hidden", "&:hover": {transform: "scale(1.1)",},}}>
                         <div className="cardGallery">
                             <div className="serachIcon1">
                                <SearchIcon sx={{backgroundColor: "white",p: "5px",borderRadius: "3px","&:hover": {backgroundColor: "blue",color: "white"}}}/>
                             </div>
                         </div>
                     </Box>
                   </Grid>
                   <Grid item xs={12} sm={8} md={6} lg={4}>
                     <Box sx={{display: "flex",justifyContent: "center",alignItems: "center",backgroundImage: `url(${gallery2})`,width: "100%",height: "300px", backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",transition: "transform 0.6s ease-in-out",overflow: "hidden", "&:hover": {transform: "scale(1.1)",},}}>
                         <div className="cardGallery">
                             <div className="serachIcon1">
                                <SearchIcon sx={{backgroundColor: "white",p: "5px",borderRadius: "3px","&:hover": {backgroundColor: "blue",color: "white"}}}/>
                             </div>
                         </div>
                     </Box>
                   </Grid>
                   <Grid item xs={12} sm={8} md={6} lg={4}>
                     <Box sx={{display: "flex",justifyContent: "center",alignItems: "center",backgroundImage: `url(${gallery3})`,width: "100%",height: "300px", backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",transition: "transform 0.6s ease-in-out",overflow: "hidden", "&:hover": {transform: "scale(1.1)",},}}>
                         <div className="cardGallery">
                             <div className="serachIcon1">
                                <SearchIcon sx={{backgroundColor: "white",p: "5px",borderRadius: "3px","&:hover": {backgroundColor: "blue",color: "white"}}}/>
                             </div>
                         </div>
                     </Box>
                   </Grid>


          </Grid>

          <Grid container item xs={12} mt={5} spacing={4}>
          <Grid item xs={12} sm={8} md={6} lg={4}>
                     <Box sx={{display: "flex",justifyContent: "center",alignItems: "center",backgroundImage: `url(${gallery4})`,width: "100%",height: "220px", backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",transition: "transform 0.6s ease-in-out",overflow: "hidden", "&:hover": {transform: "scale(1.1)",},}}>
                         <div className="cardGallery">
                             <div className="serachIcon1">
                                <SearchIcon sx={{backgroundColor: "white",p: "5px",borderRadius: "3px","&:hover": {backgroundColor: "blue",color: "white"}}}/>
                             </div>
                         </div>
                     </Box>
                   </Grid>
                   <Grid item xs={12} sm={8} md={6} lg={4}>
                     <Box sx={{display: "flex",justifyContent: "center",alignItems: "center",backgroundImage: `url(${gallery5})`,width: "100%",height: "220px", backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",transition: "transform 0.6s ease-in-out",overflow: "hidden", "&:hover": {transform: "scale(1.1)",},}}>
                         <div className="cardGallery">
                             <div className="serachIcon1">
                                <SearchIcon sx={{backgroundColor: "white",p: "5px",borderRadius: "3px","&:hover": {backgroundColor: "blue",color: "white"}}}/>
                             </div>
                         </div>
                     </Box>
                   </Grid>
                   <Grid item xs={12} sm={8} md={6} lg={4}>
                     <Box sx={{display: "flex",justifyContent: "center",alignItems: "center",backgroundImage: `url(${gallery6})`,width: "100%",height: "220px", backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",transition: "transform 0.6s ease-in-out",overflow: "hidden", "&:hover": {transform: "scale(1.1)",},}}>
                         <div className="cardGallery">
                             <div className="serachIcon1">
                                <SearchIcon sx={{backgroundColor: "white",p: "5px",borderRadius: "3px","&:hover": {backgroundColor: "blue",color: "white"}}}/>
                             </div>
                         </div>
                     </Box>
                   </Grid>


          </Grid>

          <Grid container item xs={12} mt={5} spacing={4}>
          <Grid item xs={12} sm={8} md={6} lg={4}>
                     <Box sx={{display: "flex",justifyContent: "center",alignItems: "center",backgroundImage: `url(${gallery7})`,width: "100%",height: "220px", backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",transition: "transform 0.6s ease-in-out",overflow: "hidden", "&:hover": {transform: "scale(1.1)",},}}>
                         <div className="cardGallery">
                             <div className="serachIcon1">
                                <SearchIcon sx={{backgroundColor: "white",p: "5px",borderRadius: "3px","&:hover": {backgroundColor: "blue",color: "white"}}}/>
                             </div>
                         </div>
                     </Box>
                   </Grid>
                   <Grid item xs={12} sm={8} md={6} lg={4}>
                     <Box sx={{display: "flex",justifyContent: "center",alignItems: "center",backgroundImage: `url(${gallery8})`,width: "100%",height: "220px", backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",transition: "transform 0.6s ease-in-out",overflow: "hidden", "&:hover": {transform: "scale(1.1)",},}}>
                         <div className="cardGallery">
                             <div className="serachIcon1">
                                <SearchIcon sx={{backgroundColor: "white",p: "5px",borderRadius: "3px","&:hover": {backgroundColor: "blue",color: "white"}}}/>
                             </div>
                         </div>
                     </Box>
                   </Grid>
                   <Grid item xs={12} sm={8} md={6} lg={4}>
                     <Box sx={{display: "flex",justifyContent: "center",alignItems: "center",backgroundImage: `url(${gallery9})`,width: "100%",height: "220px", backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",transition: "transform 0.6s ease-in-out",overflow: "hidden", "&:hover": {transform: "scale(1.1)",},}}>
                         <div className="cardGallery">
                             <div className="serachIcon1">
                                <SearchIcon sx={{backgroundColor: "white",p: "5px",borderRadius: "3px","&:hover": {backgroundColor: "blue",color: "white"}}}/>
                             </div>
                         </div>
                     </Box>
                   </Grid>


          </Grid>
          </Container>
    </Box>

  )
}

export default Gallery

