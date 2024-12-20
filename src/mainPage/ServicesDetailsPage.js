import React from 'react'
import Header from '../Comuncomponent/Header'
import Navbar from '../Comuncomponent/Navbar'
import Footer from '../Comuncomponent/Footer'
import Footer2 from '../Comuncomponent/Footer2'
import Servicedetail from '../Component/service/Servicedetail'
import Services from '../Component/service/Services'
import Seoservice1 from '../Component/service/Seoservice1'

function ServicesDetailsPage() {
  return (
    <div>
         <Header/>
         <Navbar/>
         <Services/>
         <Servicedetail />
         <Seoservice1/>
         <Footer/>
         <Footer2/>
    </div>
  )
}

export default ServicesDetailsPage