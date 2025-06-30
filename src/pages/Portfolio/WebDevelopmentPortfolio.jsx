import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import TrustedBy from '../../components/Generic/TrustedBy'
import ShowCase from '../../components/Portfolio/ShowCase'
import CaseStudies from '../../components/Portfolio/CaseStudies'
import Footer from '../../components/Generic/Footer'
import RecentWork from '../../components/Portfolio/RecentWork'

const WebDevelopmentPortfolio = () => {
    const data = {
        pill: "Web Development Portfolio",
        titleOrange: "WEB DEVELOPMENT",
        title: "PORTFOLIO",
        description: "Explore our stunning web development projects that combine beautiful design with powerful functionality. From responsive websites to complex web applications."
    }
    return (
        <>
            <div className="service-page portfolio">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <ServiceHeader data={data} isSpanBlock={false} />
                    <img src="/images/headerCurveLeft.svg" alt="" className="" />
                    <img src="/images/headerRectangleMd.svg" alt="" className="" />
                    <img src="/images/headerRectangleSm.svg" alt="" className="" />
                </div>
            </div>
            <TrustedBy />
            <ShowCase />
            <CaseStudies />
            <RecentWork serviceType="web-development" />
            <Footer />
        </>
    )
}

export { WebDevelopmentPortfolio }
