import React, { useState } from 'react';
import { Box, Container, Typography, Grid, FormControl, OutlinedInput, Select, MenuItem, Button } from '@mui/material';
import reqvestfree1 from '../../imges/home/reqvestfree1.jpg';
import { useNavigate } from 'react-router-dom';

function Reqvestfree() {
    const [age, setAge] = useState('');

    const navigate=useNavigate()

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
            <Box 
                sx={{ mt:"30px",backgroundImage: `url(${reqvestfree1})`, height: "100%", width: "100%", backgroundAttachment:'fixed',overflow:"hidden",objectFit:"cover",}}>
                <Container maxWidth="sm">
                <Box  py={[4, 6, 8, 12]}>
                    <Box sx={{ p:{lg:"34px",xs:"24px"}, backgroundColor: "white",}}>
                        <Box>
                            <Typography sx={{ color: "#777474", fontSize: "16px", fontWeight: "600", fontFamily: 'Rubik, sans-serif' }}>
                                Quote
                            </Typography>
                            <Typography sx={{ color: "#333333", fontSize: {lg:"34px",xs:"24px"}, fontWeight: "700", fontFamily: 'Poppins, sans-serif' }}>
                                Request A Free Quote
                            </Typography>
                            <Typography sx={{ border: "3px solid #FFA61B", mt: "20px", width: "100px" }} />
                        </Box>

                        <Grid container xs={12} item spacing={2} mt={1}>
                            <Grid item xs={12} sm={12} md={6}>
                                <FormControl sx={{ width: '100%' }}>
                                    <OutlinedInput placeholder="Your name" />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <FormControl sx={{ width: '100%' }}>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange} displayEmpty>
                                        <MenuItem sx={{fontFamily: 'Source Sans Pro, sans-serif'}} value="">SEO</MenuItem>
                                        <MenuItem sx={{fontFamily: 'Source Sans Pro, sans-serif'}} value={10}>Content marketing</MenuItem>
                                        <MenuItem sx={{fontFamily: 'Source Sans Pro, sans-serif'}} value={20}>Data Analysis</MenuItem>
                                        <MenuItem sx={{fontFamily: 'Source Sans Pro, sans-serif'}} value={30}>Digital marketing</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <FormControl sx={{ width: '100%' }}>
                                    <OutlinedInput 
                                        placeholder="Email" 
                                        type="email" 
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <FormControl sx={{ width: '100%' }}>
                                    <OutlinedInput placeholder="Phone" />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button onClick={() => navigate('/homepages1')} className='button' sx={{marginTop:"15px",px:"20px",backgroundColor: "orange",cursor: "pointer",color:"white",fontWeight:"600"}}>Submit</Button>
                       
                    </Box>
                    </Box>
                </Container>
            </Box>
    );
}

export default Reqvestfree;
