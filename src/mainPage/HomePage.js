import React from 'react';
import Header from '../Comuncomponent/Header';
import Navbar from '../Comuncomponent/Navbar';
import Agency from '../Component/Home/Agency';
import Footer from '../Comuncomponent/Footer';
import Footer2 from '../Comuncomponent/Footer2';
import Homeabout from '../Component/Home/Homeabout';
import Datapartnersh from '../Component/Home/Datapartnersh';
import Bussnesh from '../Component/Home/Bussnesh';
import Whoteprovid from '../Component/Home/Whoteprovid';
import Latestpost from '../Component/Home/Latestpost';
import Meetteam from '../Component/Home/Meetteam';
import Reqvestfree from '../Component/Home/Reqvestfree';

function HomePage() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Bussnesh />
        <Datapartnersh />
        <Whoteprovid />
        <Homeabout />
        <Agency />
        <Latestpost />   
        <Meetteam />
        <Reqvestfree />
        <Footer />
        <Footer2 />
    </div>
  );
}

export default HomePage
