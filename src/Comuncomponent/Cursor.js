// import React, { useEffect, useRef } from 'react';
// import { styled } from '@mui/material/styles';
// import { gsap } from 'gsap';
// import { Box } from '@mui/material';
// import arrowlogo from "../imges/navbar/logo.png";

// // Styled component for the custom cursor
// const Flair = styled('div')({
//   width: '100px',
//   height: '100px',
//   position: 'fixed',
//   top: '0',
//   left: '0',
//   pointerEvents: 'none',
//   background:`url(${arrowlogo}) no-repeat center center`, 
//   backgroundSize: 'contain',
//   borderRadius: '50%',
//   zIndex: '1000',
//   transform: 'rotate(0deg)',
// });

// function Cursor() {
//   const flairRef = useRef(null);

//   useEffect(() => {
//     const flair = flairRef.current;
//     gsap.set(flair, { xPercent: -50, yPercent: -50 });

//     const xTo = gsap.quickTo(flair, 'x', { duration: 0.3, ease: 'power3' });
//     const yTo = gsap.quickTo(flair, 'y', { duration: 0.3, ease: 'power3' });

//     const handleMouseMove = (e) => {
//       xTo(e.clientX);
//       yTo(e.clientY);
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     // Clean up event listener on component unmount
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <Box
//       sx={{
//         cursor: 'none ', 
//       }}
//     >
//       <Flair ref={flairRef} />
//     </Box>
//   );
// }

// export default Cursor;