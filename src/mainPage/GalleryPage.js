import React from 'react'
import Header from '../Comuncomponent/Header'
import Navbar from '../Comuncomponent/Navbar'
import Gallery from '../Component/pages/Gallery'
import Footer from '../Comuncomponent/Footer'
import Footer2 from '../Comuncomponent/Footer2'
import Gallery1 from '../Component/pages/Gallery1'
import Seoservice1 from '../Component/service/Seoservice1'

function GalleryPage() {
  return (
    <div>
           <Header/>
           <Navbar/>
           <Gallery1/>
           <Gallery/>
           <Seoservice1/>
           <Footer/>
           <Footer2/>
    </div>
  )
}

export default GalleryPage