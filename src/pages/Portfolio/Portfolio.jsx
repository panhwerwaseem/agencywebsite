import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import TrustedBy from '../../components/Generic/TrustedBy'
import ShowCase from '../../components/Portfolio/ShowCase'
import CaseStudies from '../../components/Portfolio/CaseStudies'
import Logos from '../../components/Portfolio/Logos'
import MobileApps from '../../components/Portfolio/MobileApps'
import SoftwareDevelopment from '../../components/Portfolio/SoftwareDevelopment'
import Footer from '../../components/Generic/Footer'

const Portfolio = () => {
    const data = {
        pill: "Our Work",
        titleOrange: "OUR",
        title: "PORTFOLIO",
        description: "At WizSpeed, we build robust, scalable, and innovative software solutions tailored to your unique needs. From concept to deployment, our development process is focused on driving efficiency, growth, and long-term success."
    }
    return (
        <>
            <div className="service-page">
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
            <Logos />
            <MobileApps />
            <SoftwareDevelopment />
            <Footer />
        </>
    )
}

export { Portfolio }