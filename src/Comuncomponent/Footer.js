import React from 'react';
import { Box, Container } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../imges/home/slider1.png';
import slider2 from '../imges/home/slider2.png';
import slider3 from '../imges/home/slider3.png';
import slider4 from '../imges/home/slider4.png';
import slider5 from '../imges/home/slider5.png';
import slider6 from '../imges/home/slider6.png';

function Footer() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  return (
    <Box>
      <div className="slider-container">
        <Container maxWidth="lg">
          <Slider {...settings}>
            <div>
              <Box sx={{ py: "50px", display: "flex", justifyContent: "center" }}>
                <img 
                  src={slider1}
                  alt="Slide 1" 
                  style={{ width: "80%", height: "auto" }} 
                />
              </Box>
            </div>
            <div>
              <Box sx={{ py: "50px", display: "flex", justifyContent: "center" }}>
                <img 
                  src={slider2} 
                  alt="Slide 2" 
                  style={{ width: "80%", height: "auto" }} 
                />
              </Box>
            </div>
            <div>
              <Box sx={{ py: "50px", display: "flex", justifyContent: "center" }}>
                <img 
                  src={slider3}
                  alt="Slide 3" 
                  style={{ width: "80%", height: "auto" }} 
                />
              </Box>
            </div>
            <div>
              <Box sx={{ py: "50px", display: "flex", justifyContent: "center" }}>
                <img 
                  src={slider4}
                  alt="Slide 4" 
                  style={{ width: "80%", height: "auto" }} 
                />
              </Box>
            </div>
            <div>
              <Box sx={{ py: "50px", display: "flex", justifyContent: "center" }}>
                <img 
                  src={slider5}
                  alt="Slide 5" 
                  style={{ width: "80%", height: "auto" }} 
                />
              </Box>
            </div>
            <div>
              <Box sx={{ py: "50px", display: "flex", justifyContent: "center" }}>
                <img 
                  src={slider6} 
                  alt="Slide 6" 
                  style={{ width: "80%", height: "auto" }} 
                />
              </Box>
            </div>
            <div>
              <Box sx={{ py: "50px", display: "flex", justifyContent: "center" }}>
                <img 
                  src={slider2} 
                  alt="Slide 7" 
                  style={{ width: "80%", height: "auto" }} 
                />
              </Box>
            </div>
            <div>
              <Box sx={{ py: "50px", display: "flex", justifyContent: "center" }}>
                <img 
                  src={slider3} 
                  alt="Slide 8" 
                  style={{ width: "80%", height: "auto" }} 
                />
              </Box>
            </div>
            <div>
              <Box sx={{ py: "50px", display: "flex", justifyContent: "center" }}>
                <img 
                  src={slider4} 
                  alt="Slide 9" 
                  style={{ width: "80%", height: "auto" }} 
                />
              </Box>
            </div>
            <div>
              <Box sx={{ py: "50px", display: "flex", justifyContent: "center" }}>
                <img 
                  src={slider5} 
                  alt="Slide 10" 
                  style={{ width: "80%", height: "auto" }} 
                />
              </Box>
            </div>
          </Slider>
        </Container>
      </div>
    </Box>
  );
}

export default Footer;
