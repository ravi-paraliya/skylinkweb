import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import logo from '../../src/imges/navbar/logo.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';
import { Menu, Paper, Grid } from '@mui/material';

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElService, setAnchorElService] = React.useState(null);
  const [anchorElPages, setAnchorElPages] = React.useState(null);
  const [anchorElBlog, setAnchorElBlog] = React.useState(null);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Mega Menu Handlers
  const handleServiceMenuOpen = (event) => {
    setAnchorElService(event.currentTarget);
  };

  const handleServiceMenuClose = () => {
    setAnchorElService(null);
  };

  const handlePagesMenuOpen = (event) => {
    setAnchorElPages(event.currentTarget);
  };

  const handlePagesMenuClose = () => {
    setAnchorElPages(null);
  };

  const handleBlogMenuOpen = (event) => {
    setAnchorElPages(event.currentTarget);
  };

  const handleBlogMenuClose = () => {
    setAnchorElPages(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}></Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', width: '100%', cursor: 'pointer', padding: '10px 0'}}
            onClick={() => navigate('/')}
          >
            Home
          </Typography>
        </ListItem>
        <ListItem disablePadding>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', width: '100%', cursor: 'pointer', padding: '10px 0' }}
            onClick={() => navigate('/aboutuspage')}
          >
            About
          </Typography>
        </ListItem>
        <ListItem disablePadding>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', width: '100%', cursor: 'pointer', padding: '10px 0' }}
            onClick={handleServiceMenuOpen}
          >
            Service
          </Typography>
        </ListItem>

        <ListItem disablePadding>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', width: '100%', cursor: 'pointer', padding: '10px 0' }}
            onClick={handleBlogMenuOpen}
          >
            Blog
          </Typography>
        </ListItem>

        <ListItem disablePadding>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', width: '100%', cursor: 'pointer', padding: '10px 0' }}
            onClick={handlePagesMenuOpen}
          >
            Pages
          </Typography>
        </ListItem>
        <ListItem disablePadding>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', width: '100%', cursor: 'pointer', padding: '10px 0' }}
            onClick={() => navigate('/contactpage')}
          >
            Contact
          </Typography>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',position:"revert-layer", top:"5",left:"0",width:"100%"}}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'white'}}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
            >
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Box display="flex" alignItems="center" p="4">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: '200px', height: '100px', padding: '25px 0px' }}
                />
              </Box>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {/* Navigation items */}
              <Button
                sx={{ color: 'black', marginRight: '20px',fontWeight:"600", textTransform: 'capitalize',fontSize:"16px","&:hover":{color:"#6F0AC8",textDecoration:"line-through"}}}
                onClick={() => navigate('/')}
              >
                Home
              </Button>
              <Button
                sx={{ color: 'black', marginRight: '20px',fontWeight:"600", textTransform: 'capitalize',fontSize:"16px","&:hover":{color:"#6F0AC8",textDecoration:"line-through"}  }}
                onClick={() => navigate('/aboutuspage')}
              >
                About
              </Button>
              <Button
                sx={{ color: 'black', marginRight: '20px' ,fontWeight:"600", textTransform: 'capitalize',fontSize:"16px","&:hover":{color:"#6F0AC8",textDecoration:"line-through"} }}
                onClick={handleServiceMenuOpen}
              >
                Service
              </Button>
              <Button
                sx={{ color: 'black', marginRight: '20px',fontWeight:"600", textTransform: 'capitalize',fontSize:"16px" ,"&:hover":{color:"#6F0AC8",textDecoration:"line-through"} }}
                onClick={handlePagesMenuOpen}
              >
                Pages
              </Button>

              <Button sx={{ color: 'black', marginRight: '20px',fontWeight:"600", textTransform: 'capitalize',fontSize:"16px" ,"&:hover":{color:"#6F0AC8",textDecoration:"line-through"} }}
              onClick={(event) => setAnchorElBlog(event.currentTarget)} 
              >
              Blog
              </Button>
              <Button
                sx={{ color: 'black', marginRight: '20px',fontWeight:"600", textTransform: 'capitalize',fontSize:"16px" ,"&:hover":{color:"#6F0AC8",textDecoration:"line-through"} }}
                onClick={() => navigate('/contactpage')}
              >
                Contact
              </Button>
            </Box>
            <SearchOutlinedIcon sx={{ color: 'orange',"&:hover":{color:"#6F0AC8"}}} />
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mega Menu for Services */}  
                       <Menu
                   anchorEl={anchorElService}
                   open={Boolean(anchorElService)}
                   onClose={handleServiceMenuClose}
                   anchorOrigin={{
                     vertical: 'bottom', 
                     horizontal: 'center',
                   }}
                   transformOrigin={{
                     vertical: 'top',  
                     horizontal: 'center',  
                   }}
                   PaperProps={{
                     sx: {
                       overflow: 'hidden',
                       mt: 4,
                       '& .MuiAvatar-root': {
                         width: 32,
                         height: 32,
                       },
                     },
                   }}
                 >
                   <Box>
                     <Typography
                       variant="body1"
                       sx={{ display: 'flex', justifyContent: 'center', fontWeight: '600',width:"200px",p:"10px", cursor: 'pointer',border:"block" ,"&:hover": {backgroundColor: "#6F0AC8",color:"white"}  }}
                       onClick={() => {
                         navigate('/servicespage');
                         handleServiceMenuClose();
                       }}
                     >
                       Service
                     </Typography>
                   </Box>
                   <Box>
                     <Typography
                       variant="body1"
                       sx={{ display: 'flex',zIndex:10,justifyContent: 'center', fontWeight: '600',width:"200px",p:"10px", cursor: 'pointer',border:"block" ,"&:hover": {backgroundColor: "#6F0AC8",color:"white"}  }}
                       onClick={() => {
                         navigate('/servicesdetailspage');
                         handleServiceMenuClose();
                       }}
                     >
                       Service Details
                     </Typography>
                   </Box>
                 </Menu>


      {/* Mega Menu for Pages (including Overtem) */}
      <Menu
        anchorEl={anchorElPages}
        open={Boolean(anchorElPages)}
        onClose={handlePagesMenuClose}
        anchorOrigin={{
                     vertical: 'bottom', 
                     horizontal: 'center',
                   }}
                   transformOrigin={{
                     vertical: 'top',  
                     horizontal: 'center',  
                   }}
                   PaperProps={{
                     sx: {
                       overflow: 'hidden',
                       mt: 4,
                       '& .MuiAvatar-root': {
                         width: 32,
                         height: 32,
                       },
                     },
                   }}
                 >

<Grid container spacing={2}>
            <Grid item xs={6}>
            <Typography
            variant="body1"
            sx={{ display: 'flex', justifyContent: 'center', fontWeight: '600',width:"200px",p:"5px", cursor: 'pointer',border:"block" ,"&:hover": {backgroundColor: "#6F0AC8",color:"white"} }}
            onClick={() => {
              navigate('/aboutuspage');
              handleServiceMenuClose();
            }}
          >
            About Us
          </Typography>
             
            </Grid>
          </Grid>
      
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <Typography
            variant="body1"
            sx={{ display: 'flex', justifyContent: 'center', fontWeight: '600',width:"200px",p:"10px", cursor: 'pointer',border:"block","&:hover": {backgroundColor: "#6F0AC8",color:"white"} }}
            onClick={() => {
              navigate('/overtempage');
              handleServiceMenuClose();
            }}
          >
            Our Team
          </Typography>
             
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
            <Typography
            variant="body1"
            sx={{ display: 'flex', justifyContent: 'center', fontWeight: '600',width:"200px",p:"10px", cursor: 'pointer',border:"block","&:hover": {backgroundColor: "#6F0AC8",color:"white"}  }}
            onClick={() => {
              navigate('/faqpage');
              handleServiceMenuClose();
            }}
          >
            FAQ
          </Typography>
             
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
            <Typography
            variant="body1"
            sx={{ display: 'flex', justifyContent: 'center', fontWeight: '600',width:"200px",p:"10px", cursor: 'pointer',border:"block","&:hover": {backgroundColor: "#6F0AC8",color:"white"}  }}
            onClick={() => {
              navigate('/testimonialspage');
              handleServiceMenuClose();
            }}
          >
            Testimonialspage
          </Typography>
             
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
            <Typography
            variant="body1"
            sx={{ display: 'flex', justifyContent: 'center', fontWeight: '600',width:"200px",p:"10px", cursor: 'pointer',border:"block" ,"&:hover": {backgroundColor: "#6F0AC8",color:"white"} }}
            onClick={() => {
              navigate('/gallerypage');
              handleServiceMenuClose();
            }}
          >
           GalleryPage
          </Typography>
             
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
            <Typography
            variant="body1"
            sx={{ display: 'flex', justifyContent: 'center', fontWeight: '600',width:"200px",p:"10px", cursor: 'pointer',border:"block" ,"&:hover": {backgroundColor: "#6F0AC8",color:"white"} }}
            onClick={() => {
              navigate('/pagenotfoundpage');
              handleServiceMenuClose();
            }}
          >
           404
          </Typography>
             
            </Grid>
          </Grid>
  
      </Menu>

      
      {/* Mega Menu for blog */}
      <Menu
  anchorEl={anchorElBlog}
  open={Boolean(anchorElBlog)}
  onClose={() => setAnchorElBlog(null)} 
  anchorOrigin={{
                     vertical: 'bottom', 
                     horizontal: 'center',
                   }}
                   transformOrigin={{
                     vertical: 'top',  
                     horizontal: 'center',  
                   }}
                   PaperProps={{
                     sx: {
                       overflow: 'hidden',
                       mt: 4,
                       '& .MuiAvatar-root': {
                         width: 32,
                         height: 32,
                       },
                     },
                   }}
                 >
  <Box>
    <Typography
      variant="body1"
      sx={{ display: 'flex', justifyContent: 'center', fontWeight: '600',width:"200px",p:"10px", cursor: 'pointer',border:"block" ,"&:hover": {backgroundColor: "#6F0AC8",color:"white"}  }}
      onClick={() => {
        navigate('/blogpage'); 
        setAnchorElBlog(null);
      }}
    >
      Blog
    </Typography>
  </Box>
  <Box>
    <Typography
      variant="body1"
      sx={{ display: 'flex', justifyContent: 'center', fontWeight: '600',width:"200px",p:"10px", cursor: 'pointer',border:"block" ,"&:hover": {backgroundColor: "#6F0AC8",color:"white"}  }}
      onClick={() => {
        navigate('/bolgdetailspage'); 
        setAnchorElBlog(null); 
      }}
    >
      Blog Details
    </Typography>
  </Box>
</Menu>


      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;

