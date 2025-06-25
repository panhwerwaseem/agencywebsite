import React, { useState } from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import TrustedBy from '../../components/Generic/TrustedBy'
import ServiceTabs from '../../components/Services/ServiceTabs'
import ServiceSteps from '../../components/Services/ServiceSteps'
import Projects from '../../components/Generic/Projects'
import FAQs from '../../components/Generic/FAQs'
import ServiceCoversion from '../../components/Services/ServiceCoversion'
import Footer from '../../components/Generic/Footer'

const WebDevelopment = () => {
    const data = {
        pill: "Our Services",
        titleOrange: "WEBSITES",
        title: "DEVELOPMENT",
        description: "At WizSpeed, we build robust, scalable, and innovative software solutions tailored to your unique needs. From concept to deployment, our development process is focused on driving efficiency, growth, and long-term success."
    }

    const tabsData = {
        'custom-web-design': {
            title: 'Custom Web Design',
            service: {
                title: "Custom Web Design",
                heading: "Your Brand, Your Story, Your Website.",
                description: "Unlike pre-built templates, our Custom Web Development Services offer unparalleled flexibility and control, enabling you to create a truly unique online presence. Our expert developers use the latest technologies and programming languages to build websites that are not only visually stunning but also highly functional and optimized for performance. We focus on creating websites that deliver exceptional user experiences and drive results."
            },
            image: "/images/custom-development.jpg"
        },
        '3d-animated': {
            title: '3D Animated',
            service: {
                title: "3D Animated",
                heading: "Your Brand, Your Story, Your Website.",
                description: "Unlike pre-built templates, our Custom Web Development Services offer unparalleled flexibility and control, enabling you to create a truly unique online presence. Our expert developers use the latest technologies and programming languages to build websites that are not only visually stunning but also highly functional and optimized for performance. We focus on creating websites that deliver exceptional user experiences and drive results."
            },
            image: "/images/custom-development.jpg"
        },
        'webflow': {
            title: 'WebFlow',
            service: {
                title: "Webflow Design & Development",
                heading: "Your Brand, Your Story, Your Website.",
                description: "Unlike pre-built templates, our Custom Web Development Services offer unparalleled flexibility and control, enabling you to create a truly unique online presence. Our expert developers use the latest technologies and programming languages to build websites that are not only visually stunning but also highly functional and optimized for performance. We focus on creating websites that deliver exceptional user experiences and drive results."
            },
            image: "/images/custom-development.jpg"
        },
        'wix': {
            title: 'Wix',
            service: {
                title: "Wix Website Design",
                heading: "Your Brand, Your Story, Your Website.",
                description: "Unlike pre-built templates, our Custom Web Development Services offer unparalleled flexibility and control, enabling you to create a truly unique online presence. Our expert developers use the latest technologies and programming languages to build websites that are not only visually stunning but also highly functional and optimized for performance. We focus on creating websites that deliver exceptional user experiences and drive results."
            },
            image: "/images/custom-development.jpg"
        },
        'shopify': {
            title: 'Shopify',
            service: {
                title: "Shopify Store Development",
                heading: "Your Brand, Your Story, Your Website.",
                description: "Unlike pre-built templates, our Custom Web Development Services offer unparalleled flexibility and control, enabling you to create a truly unique online presence. Our expert developers use the latest technologies and programming languages to build websites that are not only visually stunning but also highly functional and optimized for performance. We focus on creating websites that deliver exceptional user experiences and drive results."
            },
            image: "/images/custom-development.jpg"
        },
        'e-commerce': {
            title: 'E-Commerce',
            service: {
                title: "Custom E-commerce Development",
                heading: "Your Brand, Your Story, Your Website.",
                description: "Unlike pre-built templates, our Custom Web Development Services offer unparalleled flexibility and control, enabling you to create a truly unique online presence. Our expert developers use the latest technologies and programming languages to build websites that are not only visually stunning but also highly functional and optimized for performance. We focus on creating websites that deliver exceptional user experiences and drive results."
            },
            image: "/images/custom-development.jpg"
        },
        'square-space': {
            title: 'Square Space',
            service: {
                title: "Squarespace Design",
                heading: "Your Brand, Your Story, Your Website.",
                description: "Unlike pre-built templates, our Custom Web Development Services offer unparalleled flexibility and control, enabling you to create a truly unique online presence. Our expert developers use the latest technologies and programming languages to build websites that are not only visually stunning but also highly functional and optimized for performance. We focus on creating websites that deliver exceptional user experiences and drive results."
            },
            image: "/images/custom-development.jpg"
        },
        'wordpress': {
            title: 'WordPress',
            service: {
                title: "WordPress Development",
                heading: "Your Brand, Your Story, Your Website.",
                description: "Unlike pre-built templates, our Custom Web Development Services offer unparalleled flexibility and control, enabling you to create a truly unique online presence. Our expert developers use the latest technologies and programming languages to build websites that are not only visually stunning but also highly functional and optimized for performance. We focus on creating websites that deliver exceptional user experiences and drive results."
            },
            image: "/images/custom-development.jpg"
        }
    }

    const headData = {
        pill: "Web Development",
        title: "Web Development",
        highlightText: "That Drives Results",
        description: "We build fast, responsive, and scalable websites tailored to your business goals. Our solutions combine modern design with powerful functionality to help you grow online."
    }

    const stepsData = {
        'custom-web-design': [
            {
                number: "01",
                title: "Discovery & Strategy",
                description: "We start by understanding your business goals, target audience, and unique challenges to create a tailored strategy.",
                image: "/images/steps.jpg"
            },
            {
                number: "02",
                title: "Design & Planning",
                description: "Our creative team develops wireframes, mockups, and detailed project plans to bring your vision to life.",
                image: "/images/steps.jpg"
            },
            {
                number: "03",
                title: "Development & Build",
                description: "We code and build your solution using the latest technologies and best practices for optimal performance.",
                image: "/images/steps.jpg"
            },
            {
                number: "04",
                title: "Testing & Quality Assurance",
                description: "Rigorous testing across devices and browsers ensures your project works flawlessly before launch.",
                image: "/images/steps.jpg"
            },
            {
                number: "05",
                title: "Launch & Support",
                description: "We handle the launch process and provide ongoing support to ensure your continued success.",
                image: "/images/steps.jpg"
            }
        ],
        '3d-animated': [
            {
                number: "01",
                title: "Discovery & Strategy",
                description: "We start by understanding your business goals, target audience, and unique challenges to create a tailored strategy.",
                image: "/images/steps.jpg"
            },
            {
                number: "02",
                title: "Design & Planning",
                description: "Our creative team develops wireframes, mockups, and detailed project plans to bring your vision to life.",
                image: "/images/steps.jpg"
            },
            {
                number: "03",
                title: "Development & Build",
                description: "We code and build your solution using the latest technologies and best practices for optimal performance.",
                image: "/images/steps.jpg"
            },
            {
                number: "04",
                title: "Testing & Quality Assurance",
                description: "Rigorous testing across devices and browsers ensures your project works flawlessly before launch.",
                image: "/images/steps.jpg"
            },
            {
                number: "05",
                title: "Launch & Support",
                description: "We handle the launch process and provide ongoing support to ensure your continued success.",
                image: "/images/steps.jpg"
            }

        ]
    }

    const [activeTab, setActiveTab] = useState(Object.keys(tabsData)[0] || '')

    return (
        <>
            <div className="service-page">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <ServiceHeader data={data} />
                </div>
                <img src="/images/headerCurveLeft.svg" alt="" className="" />
                <img src="/images/headerRectangleMd.svg" alt="" className="" />
                <img src="/images/headerRectangleSm.svg" alt="" className="" />
            </div>
            <TrustedBy />
            <ServiceTabs headData={headData} tabsData={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
            <ServiceSteps stepsData={stepsData[activeTab]} />
            <Projects />
            <div className='pt-[120px] bg-brand-dark'>
                <FAQs />
            </div>
            <ServiceCoversion />
            <Footer />
        </>
    )
}

export { WebDevelopment }