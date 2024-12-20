import React from 'react'
import Header from '../Comuncomponent/Header'
import Navbar from '../Comuncomponent/Navbar'
import Blog from '../Component/blog/Blog'
import Latestpost from '../Component/Home/Latestpost'
import Footer from '../Comuncomponent/Footer'
import Footer2 from '../Comuncomponent/Footer2'
import Seoservice1 from '../Component/service/Seoservice1'

function BlogPage() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Blog/>
        <Latestpost/>
        <Seoservice1/>
        <Footer/>
        <Footer2/>

    </div>
  )
}

export default BlogPage