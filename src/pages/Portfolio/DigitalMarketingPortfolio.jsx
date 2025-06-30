import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import TrustedBy from '../../components/Generic/TrustedBy'
import Logos from '../../components/Portfolio/Logos'
import WebsiteShowcase from '../../components/Portfolio/WebsiteShowcase'
import Footer from '../../components/Generic/Footer'
import RecentWork from '../../components/Portfolio/RecentWork'

const DigitalMarketingPortfolio = () => {
    const data = {
        pill: "Digital Marketing Portfolio",
        titleOrange: "DIGITAL MARKETING",
        title: "PORTFOLIO",
        description: "Discover our successful digital marketing campaigns that drive real results. From SEO optimization to social media marketing and PPC advertising."
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
            <div data-aos="fade-up" data-aos-delay="100">
                <WebsiteShowcase />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <Logos />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
                <RecentWork serviceType="digital-marketing" />
            </div>
            <Footer />
        </>
    )
}

export { DigitalMarketingPortfolio }
