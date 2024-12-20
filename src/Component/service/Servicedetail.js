import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import gallery1 from '../../imges/pages/gallery-img1.jpg';
import gallery2 from '../../imges/pages/gallery-img2.jpg';
import SearchIcon from '@mui/icons-material/Search';
import service1 from '../../imges/service/service1.jpg';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import seoimg from '../../imges/service/seoimg.jpg';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';






function Servicedetail() {

     const [expanded, setExpanded] = React.useState(false);

     const handleChange = (panel) => (event, isExpanded) => {
       setExpanded(isExpanded ? panel : false);
     };

  return (
    <Box sx={{ py: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
            <Box sx={{ backgroundColor: "#6F0AC8", mb: 2 }}>
                 <Typography sx={{ p: 2, fontSize: "24px", color: "white", fontFamily: 'Poppins, sans-serif', fontWeight: 600, }} >
                SEO Services
              </Typography>
            </Box>
            {["Content Marketing","Data Analysis","Digital Marketing","Web Analytics","Social Marketing","Great Speakers",
            ].map((service, index) => (
              <Box key={index} sx={{ backgroundColor: "#F7F7FC", mt: 1 }}>
                <Typography sx={{ p: 2, fontSize: "16px", color: "#626467", fontFamily: 'Rubik, sans-serif', }} > {service} </Typography>
              </Box>
            ))}
            <Box sx={{ backgroundColor: "black", p: 3, mt: 5, textAlign: "start", }} >
              <Typography sx={{ color: "white", fontSize: "28px", fontWeight: 600, fontFamily: 'Poppins, sans-serif', }} > Brochure </Typography>
              <Typography sx={{color: "white",fontFamily: 'Rubik, sans-serif',mt: 2,mb: 2,}}> Impress clients new and existing with elite construction brochures. Impress clients new and existing with elite construction.</Typography>
              <Button className='buttons' sx={{marginTop:"15px",mt:"30px",fontSize:"18px",display:"flex",justifyContent:"center", width:{xs:"100%",md:"100%",sm:"300px",lg:"100%"},mb:"10px",borderRadius:"0px",backgroundColor: "orange",cursor: "pointer",color:"white",fontWeight:"600"}}>DOWNLOAD PDF</Button>
            </Box>
            <Box sx={{ backgroundColor: "#6F0AC8", mt: 5 }}>
              <Typography sx={{ p: 2, fontSize: "24px", color: "white", fontFamily: 'Poppins, sans-serif', fontWeight: 600, }} > Contact Info </Typography>
            </Box>
            <Box sx={{ backgroundColor: "#F7F7FC", pb: 2 }}>
              {[
                {
                  icon: <PlaceIcon sx={{ fontSize: 30, color: "orange" }} />,
                  text: ["503 Old Buffalo Street Northwest", "#205, New York-3087"],
                },
                {
                  icon: <PhoneEnabledIcon sx={{ fontSize: 30, color: "orange" }} />,
                  text: ["+0123-505-6789", "+2390-875-2235"],
                },
                {
                  icon: <EmailIcon sx={{ fontSize: 30, color: "orange" }} />,
                  text: ["info@sbtechnosoft.com", "www.sbtechnosoft.com"],
                },
              ].map((info, index) => (
                <Box key={index} sx={{ display: "flex", mt: 1 }}>
                  <Box sx={{ p: 2 }}>{info.icon}</Box>
                  <Box sx={{ pt: 2 }}>
                    {info.text.map((line, i) => (
                      <Typography key={i} sx={{ fontFamily: 'Rubik, sans-serif', fontSize: "16px", color: "#4F5250", }} > {line} </Typography>
                       ))}
                    </Box>
                  </Box>
                 ))}
               </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box>
              <img src={service1} alt="" style={{ height: "100%", width: "100%"}} />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: "28px", fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Content Marketing</Typography>
              <Typography sx={{ fontSize: "16.5px", fontFamily: 'Rubik, sans-serif', color: "#7D8E98", lineHeight: "30px", mt: 1, }} >We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleas ure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrink ing from toil and pain.</Typography>
            </Box>
            <Box sx={{ p: 3, backgroundColor: "#F7F7FC", borderLeft: "10px solid #FFA61B", mt: 2, }} >
              <Typography sx={{ fontSize: "17px", fontFamily: 'Rubik, sans-serif', color: "#7D8E98", lineHeight: "30px", }} >These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. Ut enim ad minim veniam, quis nostrud exercitation.</Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontSize: "16.5px", fontFamily: 'Rubik, sans-serif', color: "#7D8E98", lineHeight: "30px", }} > We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleas ure of the moment, so blinded, the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will. </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <img src={seoimg} alt="" style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: "30px", fontWeight: 600 }}>Benefit Of Service</Typography>
                    <Typography sx={{ fontSize: "16px", color: "#818C95", fontFamily: 'Rubik, sans-serif', lineHeight: "30px", mt: 1, }} > We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms offer pleas ure of the moment. that they cannot foresee hepain and trouble that are bound. </Typography>
                    <Box sx={{ mt: 2 
                    }}>
                      {[
                        "New Construction Benefit of Service",
                        "Renovations Benefit of Service",
                        "Historic Renovations and Restorations",
                        "Additions Benefit of Service",
                      ].map((benefit, index) => (
                        <li key={index} style={{ fontSize: "15px", color: "#818C95", fontFamily: 'Rubik, sans-serif', marginTop: "10px", }} > {benefit} </li>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          
                     <Box sx={{mt:"30px"}}>
                          <Box>
                           <Typography sx={{fontSize:"30px",fontFamily: 'Poppins, sans-serif',color:"black",fontWeight:"600"}}>What Is Included</Typography>
                           </Box>
                           
    <Box>
      <Accordion sx={{ border: "1px solid #F0F0F0", transition: 'background-color 0.3s ease' }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary expandIcon={expanded === 'panel1' ? (<RemoveIcon sx={{ color: 'white' }} />) : (<AddIcon sx={{ color: 'orange' }} />)}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{height: '50px',minHeight: '50px !important',display: 'flex',alignItems: 'center',backgroundColor: expanded === 'panel1' ? '#FFA61B' : 'white',}}>
          <Typography sx={{width: '100%',flexShrink: 0,fontSize: '20px',fontWeight: '700',fontFamily: 'inherit',color: expanded === 'panel1' ? 'white' : 'black',}}>Content Marketing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '17px', fontFamily: 'Rubik, sans-serif', color: '#76848C', mt: "10px" }}>
            We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and the trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through the weakness of will so blinded by desire.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ border: "1px solid #F0F0F0", transition: 'background-color 0.3s ease' }}
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={expanded === 'panel2' ? (<RemoveIcon sx={{ color: 'white' }} />) : (<AddIcon sx={{ color: 'orange' }} />)}aria-controls="panel2bh-content" id="panel2bh-header"
          sx={{height: '50px',minHeight: '50px !important',display: 'flex',alignItems: 'center',backgroundColor: expanded === 'panel2' ? '#FFA61B' : 'white',}}>
          <Typography sx={{width: '100%',flexShrink: 0,fontSize: '20px',fontWeight: '700',fontFamily: 'inherit',color: expanded === 'panel2' ? 'white' : 'black',}}>Digital Marketing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '17px', fontFamily: 'Rubik, sans-serif', color: '#76848C', mt: "10px" }}>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and the trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through the weakness of will so blinded by desire.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ border: "1px solid #F0F0F0", transition: 'background-color 0.3s ease' }}
                 expanded={expanded === 'panel3'}
                 onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={expanded === 'panel3' ? (<RemoveIcon sx={{ color: 'white' }} />) : (<AddIcon sx={{ color: 'orange' }} />)} aria-controls="panel3bh-content" id="panel3bh-header"sx={{height: '50px',minHeight: '50px !important',display: 'flex',alignItems: 'center',backgroundColor: expanded === 'panel3' ? '#FFA61B' : 'white',}}>
          <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '20px', fontWeight: '700', fontFamily: 'inherit', color: expanded === 'panel3' ? 'white' : 'black', }} > Web Analytics </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '17px', fontFamily: 'Rubik, sans-serif', color: '#76848C', mt: "10px" }}>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and the trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through the weakness of will so blinded by desire.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ border: "1px solid #F0F0F0", transition: 'background-color 0.3s ease' }}
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')} >
        <AccordionSummary expandIcon={expanded === 'panel4' ? (<RemoveIcon sx={{ color: 'white' }} />) : (<AddIcon sx={{ color: 'orange' }} />)}aria-controls="panel4bh-content" id="panel4bh-header"sx={{height: '50px',minHeight: '50px !important',display: 'flex',alignItems: 'center',backgroundColor: expanded === 'panel4' ? '#FFA61B' : 'white',}}> 
          <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '20px', fontWeight: '700', fontFamily: 'inherit', color: expanded === 'panel4' ? 'white' : 'black', }} > Social Marketing </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '17px', fontFamily: 'Rubik, sans-serif', color: '#76848C', mt: "10px" }}>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and the trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through the weakness of will so blinded by desire.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
 </Box>
                        
                          
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Servicedetail;
