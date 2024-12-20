import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';

function HomeBack() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      id="back-to-top"
      sx={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 999,
        border: '2px solid #6F0AC8',
        borderRadius:"5px",
        fontSize: '26px',
        width: '40px',
        height: '40px',
        textAlign: 'center',
        cursor: 'pointer',
        display: showButton ? 'block' : 'none',
        backgroundColor:"#6F0AC8",
        ":hover":{
            backgroundColor:"white",
            ".backIcon":{
              color:'#6F0AC8',
            }
        }
      }}
      onClick={scrollToTop}
    >
      <NavigationIcon sx={{ fontSize: 16,mb:"2px", color: "white" }} className='backIcon'/>
    </Box>
  );
}

export default HomeBack;