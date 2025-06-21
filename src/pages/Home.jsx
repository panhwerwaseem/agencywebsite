import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import TrustedBy from '../components/Generic/TrustedBy'
import AboutUs from '../components/Generic/AboutUs'

const Home = () => {
    return (
        <>
            <div className='home-page'>
                <div className="container">
                    <HomeHeader />
                </div>
                <img src="./images/headerShadow.svg" alt="" className="" />
                <img src="./images/headerRectangleMd.svg" alt="" className="" />
                <img src="./images/headerRectangleSm.svg" alt="" className="" />
            </div>
            <TrustedBy />
            <AboutUs />
        </>
    )
}

export default Home