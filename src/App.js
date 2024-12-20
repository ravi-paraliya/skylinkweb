import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import Services from './Component/service/Services'
import Pagesh from './Component/pages/Pagesh'
import Gallery from './Component/pages/Gallery'
import Servicedetail from './Component/service/Servicedetail'
import Faq from './Component/pages/Faq'
import Overtem from './Component/pages/Overtem'
import Testimonials from './Component/pages/Testimonials'
import Pagenotfound from './Component/pages/Pagenotfound'
import Blog from './Component/blog/Blog'
import Blogdetail from './Component/blog/Blogdetail'
import Contactus from './Component/contect/Contactus'
import Contactdetail from './Component/contect/Contactdetail'
import AboutUsPage from './mainPage/AboutUsPage'
import HomePage from './mainPage/HomePage'
import ServicesPage from './mainPage/ServicesPage'
import { Route, Routes, useLocation } from 'react-router-dom'
import ContactPage from './mainPage/ContactPage'
import ServicesDetailsPage from './mainPage/ServicesDetailsPage'
import OvertemPage from './mainPage/OvertemPage'
import FaqPage from './mainPage/FaqPage'
import TestimonialsPage from './mainPage/TestimonialsPage'
import GalleryPage from './mainPage/GalleryPage'
import PagenotfoundPage from './mainPage/PagenotfoundPage'
import Blogpage from './mainPage/BlogPage'
import BlogDetailsPage from './mainPage/BlogDetailspage'
import HomeBack from './Comuncomponent/HomeBack'
import Cursor from './Comuncomponent/Cursor'





function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
      <Box>
      {/* <Cursor /> */}
      {/* <HomePage />
      <AboutUsPage /> */}
      {/* <ServicesPage /> */}

           {/* <Blog/> */}
           {/* <Blogdetail/> */}

      
        <HomeBack/>
        <ScrollToTop />


        <Routes>
            <Route  path='/' element={<HomePage/>} />
            <Route  path='/homepages1' element={<HomePage/>} />
            <Route  path='/aboutuspage' element={<AboutUsPage/>}/>
            <Route  path='/contactpage' element={<ContactPage/>}/>
            <Route  path='/contactpage1' element={<ContactPage/>}/>
            <Route  path='/servicespage' element={<ServicesPage/>}/>
            <Route  path='/servicesdetailspage' element={<ServicesDetailsPage/>}/>
            <Route  path='/servicesdetailspage2' element={<ServicesDetailsPage/>}/>
            <Route  path='/servicesdetailspage3' element={<ServicesDetailsPage/>}/>
            <Route  path='/servicesdetailspage4' element={<ServicesDetailsPage/>}/>
            <Route  path='/servicesdetailspage5' element={<ServicesDetailsPage/>}/>
            <Route  path='/overtempage' element={<OvertemPage/>}/>
            <Route  path='/faqpage' element={<FaqPage/>}/>
            <Route  path='/testimonialspage' element={<TestimonialsPage/>}/>
            <Route  path='/gallerypage' element={<GalleryPage/>}/>
            <Route  path='/pagenotfoundpage' element={<PagenotfoundPage/>}/>
            <Route  path='/blogpage' element={<Blogpage/>}/>
            <Route path='/bolgdetailspage' element={<BlogDetailsPage/>}/>
            <Route path='/bolgdetailspage1' element={<BlogDetailsPage/>}/>

        </Routes>
      </Box>
  )
}

export default App