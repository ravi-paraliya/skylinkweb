import React from 'react'
import Services from '../Component/service/Services'
import Header from '../Comuncomponent/Header'
import Navbar from '../Comuncomponent/Navbar'
import Servicedetail from '../Component/service/Servicedetail'
import Footer from '../Comuncomponent/Footer'
import Footer2 from '../Comuncomponent/Footer2'
import Whoteprovid from '../Component/Home/Whoteprovid'
import Seoservice from '../Component/service/Seoservice'
import Seoservice1 from '../Component/service/Seoservice1'

function ServicesPage() {
  return (
    <div>
        <Header />
        <Navbar />
        <Services/>
        <Seoservice/>
        <Seoservice1/>
        <Footer />
        <Footer2 />
      
    </div>
  )
}

export default ServicesPage