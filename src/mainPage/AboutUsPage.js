import React from 'react'
import Header from '../Comuncomponent/Header'
import Navbar from '../Comuncomponent/Navbar'
import Agency from '../Component/Home/Agency'
import Aboutus from '../Component/About us/Aboutus'
import Footer from '../Comuncomponent/Footer'
import Footer2 from '../Comuncomponent/Footer2'

function AboutUsPage() {
  return (
    <div>
        <Header />
        <Navbar/>
        <Aboutus/>
        <Agency />
        <Footer />
        <Footer2 />
    </div>
  )
}

export default AboutUsPage