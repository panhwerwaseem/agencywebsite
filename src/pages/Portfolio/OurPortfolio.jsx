import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import TrustedBy from '../../components/Generic/TrustedBy'
import Footer from '../../components/Generic/Footer'
import RecentWork from '../../components/Portfolio/RecentWork'

const OurPortfolio = () => {
    const data = {
        pill: "Our Work",
        titleOrange: "OUR",
        title: "PORTFOLIO",
        description: "Feeling invisible online? A well-designed website gets you noticed and builds trust and credibility. See how we’ve transformed businesses with growth-driven website designs. "
    }
    return (
        <>
            <div className="service-page portfolio" data-aos="fade-down">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <ServiceHeader data={data} isSpanBlock={false} />
                    <img src="/images/headerCurveLeft.svg" alt="" className="" data-aos="fade-up" data-aos-delay="200" />
                    <img src="/images/headerRectangleMd.svg" alt="" className="" data-aos="fade-left" data-aos-delay="300" />
                    <img src="/images/headerRectangleSm.svg" alt="" className="" data-aos="fade-right" data-aos-delay="400" />
                </div>
            </div>
            <div data-aos="fade-up">
                <TrustedBy />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <RecentWork />
            </div>
            <Footer />
        </>
    )
}

export { OurPortfolio }