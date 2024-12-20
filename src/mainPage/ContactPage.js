import React from 'react'
import Header from '../Comuncomponent/Header'
import Navbar from '../Comuncomponent/Navbar'
import Contactus from '../Component/contect/Contactus'
import Footer from '../Comuncomponent/Footer'
import Footer2 from '../Comuncomponent/Footer2'
import Contactdetail from '../Component/contect/Contactdetail'
import Seoservice1 from '../Component/service/Seoservice1'

function ContactPage() {
  return (
    <div>
        <Header />
        <Navbar />
        <Contactus />
        <Contactdetail/>
        <Seoservice1/>
        <Footer />
        <Footer2 />
    </div>
  )
}

export default ContactPage