import React from 'react'
import Header from '../Comuncomponent/Header'
import Navbar from '../Comuncomponent/Navbar'
import Overtem from '../Component/pages/Overtem'
import Meetteam from '../Component/Home/Meetteam'
import Footer from '../Comuncomponent/Footer'
import Footer2 from '../Comuncomponent/Footer2'
import Seoservice1 from '../Component/service/Seoservice1'

function OvertemPage() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Overtem/>
        <Meetteam/>
        <Seoservice1/>
        <Footer/>
        <Footer2/>
    </div>
  )
}

export default OvertemPage