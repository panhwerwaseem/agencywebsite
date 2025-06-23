import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import TrustedBy from '../components/Generic/TrustedBy'
import AboutUs from '../components/Generic/AboutUs'
import WhatWeDo from '../components/Generic/WhatWeDo'
import Projects from '../components/Generic/Projects'
import Testomonials from '../components/Generic/Testomonials'
import LetsTalk from '../components/Generic/LetsTalk'
import FAQs from '../components/Generic/FAQs'
import Footer from '../components/Generic/Footer'
import Navbar from '../components/Generic/Navbar'

const Home = () => {
    return (
        <>
            <div className='home-page'>
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <HomeHeader />
                </div>
                <img src="/images/headerShadow.svg" alt="" className="" />
                <img src="/images/headerRectangleMd.svg" alt="" className="" />
                <img src="/images/headerRectangleSm.svg" alt="" className="" />
            </div>
            <TrustedBy />
            <AboutUs />
            <WhatWeDo />
            <Projects />
            <Testomonials />
            <LetsTalk />
            <FAQs />
            <Footer />
        </>
    )
}

export default Home