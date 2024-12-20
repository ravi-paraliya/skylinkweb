import { Box, Container, Grid, Grid2, Typography } from '@mui/material'
import React from 'react'
import Input from '@mui/material/Input';
import { FormControl, Select, MenuItem, OutlinedInput } from '@mui/material';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Navigate, useNavigate } from 'react-router-dom';


const ariaLabel = { 'aria-label': 'description' };


function Contactdetail() {
  
  const Navigate=useNavigate()

    const [selectedValue, setSelectedValue] = React.useState('');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    return (
<Box>
  <Container maxWidth="lg">
    <Grid container item xs={12} sx={{ mt:{xs:"0px",md:"40px",sm:"30px",lg:"50px"} ,mb:{xs:"40px",md:"40px",sm:"40px",lg:"50px"}}} spacing={5}>
      <Grid container item xs={12} lg={7}>
        <Box sx={{ height: "100%", width: "100%", border: "2px solid #F1F1F4", px: { xs: "10px", md: "20px" },  boxShadow: "0 0 20px 10px #F1F1F4", }} >
          <Box sx={{ display:{xs:"flex",md:"flex",sm:"block",xs:"block"}, alignItems: "center" }} gap={5}>
            <Input placeholder="Name" inputProps={{ 'aria-label': 'name' }} sx={{width: "100%",pt: { xs: "15px", md: "20px" },'& .MuiInputBase-input': {color: 'black',padding: '10px',width: "100%"},'&:focus .MuiInputBase-input': {outline: 'none'}}}/>
            <Input placeholder="Phone" inputProps={{ 'aria-label': 'phone' }} sx={{ width: "100%", pt: { xs: "15px", md: "20px" }, '& .MuiInputBase-input': { color: 'black', padding: '10px', width: "100%", }, '&:focus .MuiInputBase-input': { outline: 'none', }, }} />
          </Box>
          <Input placeholder="Email" type='email' inputProps={{ 'aria-label': 'email' }} sx={{width: "100%",pt: { xs: "15px", md: "20px" },'& .MuiInputBase-input':{color: 'black',padding: '10px',width: "100%"},'&:focus .MuiInputBase-input': {outline: 'none'}}}/>
          <FormControl sx={{ width: "100%", mt: 2 }}>
            <Select value={selectedValue} onChange={handleChange} displayEmpty input={<OutlinedInput sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, '& .MuiInputBase-input': { padding: '10px' }, borderBottom: "2px solid #8a8a8a", }} />} inputProps={{ 'aria-label': 'service' }}>
              <MenuItem value="" disabled sx={{ fontFamily: 'Rubik, sans-serif' }}>Digital Marketing</MenuItem>
              <MenuItem sx={{ fontFamily: 'Rubik, sans-serif' }} value="Select Services">Select Services</MenuItem>
              <MenuItem sx={{ fontFamily: 'Rubik, sans-serif' }} value="Content Marketing">Content Marketing</MenuItem>
              <MenuItem sx={{ fontFamily: 'Rubik, sans-serif' }} value="Data Analysis">Data Analysis</MenuItem>
              <MenuItem sx={{ fontFamily: 'Rubik, sans-serif' }} value="Digital Marketing">Digital Marketing</MenuItem>
              <MenuItem sx={{ fontFamily: 'Rubik, sans-serif' }} value="Web Analysis">Web Analysis</MenuItem>
              <MenuItem sx={{ fontFamily: 'Rubik, sans-serif' }} value="Social Marketing">Social Marketing</MenuItem>
              <MenuItem sx={{ fontFamily: 'Rubik, sans-serif' }} value="Great Speakers">Great Speakers</MenuItem>
            </Select>
          </FormControl>
          <TextField sx={{width: "100%",py: { xs: "15px", md: "20px" },'& .MuiInputBase-input': {color: 'black',padding: '10px',width: "100%",},'&:focus .MuiInputBase-input': {outline: 'none',},}} id="standard-multiline-static" multiline rows={4} placeholder='Messages' variant="standard"/>
               <button onClick={() => Navigate('/contactpage1')} className='buttonc'>Send</button>
        </Box>
      </Grid>
      <Grid container item xs={12} lg={5} gap={5}>
        <Card sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", textAlign: "center", padding: "20px", width: "100%", border: "none", boxShadow: "0 0 20px 10px #F1F1F4", }} >
          <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: "600", fontSize: "20px" }}>Address</Typography>
          <Typography sx={{ fontFamily: "'Rubik', sans-serif", color: "black", fontSize: "16px" }}>No. 123, Street, State, Country, Pincode</Typography>
        </Card>

        <Card sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", textAlign: "center", padding: "20px", width: "100%", border: "none", boxShadow: "0 0 20px 10px #F1F1F4", }} >
          <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: "600", fontSize: "20px" }}>Phone</Typography>
          <Typography sx={{ fontFamily: "'Rubik', sans-serif", color: "black", fontSize: "16px" }}>+1 (012) 456-7890</Typography>
        </Card>

        <Card sx={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", textAlign: "center", padding: "20px", width: "100%", border: "none", boxShadow: "0 0 20px 10px #F1F1F4", }} >
          <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: "600", fontSize: "20px" }}>Email Id</Typography>
          <Typography sx={{ fontFamily: "'Rubik', sans-serif", color: "black", fontSize: "16px" }}>info@sbtechnosoft.com</Typography>
        </Card>
      </Grid>
    </Grid>
  </Container>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988736963!2d-0.2664052417449562!3d51.528739804845316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b5bb717f3f3%3A0x49912e793900b20a!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1729513251043!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</Box>

    )
}

export default Contactdetail