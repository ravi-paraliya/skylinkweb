import React from 'react'
import Header from '../Comuncomponent/Header'
import Navbar from '../Comuncomponent/Navbar'
import Blogdetail from '../Component/blog/Blogdetail'
import Footer from '../Comuncomponent/Footer'
import Footer2 from '../Comuncomponent/Footer2'
import Blog from '../Component/blog/Blog'
import Seoservice1 from '../Component/service/Seoservice1'

function BlogDetailspage() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Blog/>
        <Blogdetail/>
        <Seoservice1/>
        <Footer/>
        <Footer2/>
    </div>
  )
}

export default BlogDetailspage