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
import ServiceEssentianls from '../../components/Services/ServiceEssentianls'

const SoftwareDevelopment = () => {
    const data = {
        pill: "Our Services",
        titleOrange: "SOFTWARE",
        title: "DEVELOPMENT",
        description: "At WizSpeed, we build robust, scalable, and innovative software solutions tailored to your unique needs. From concept to deployment, our development process is focused on driving efficiency, growth, and long-term success."
    }

    const tabsData = {
        'custom-crm': {
            title: 'Custom CRM',
            service: {
                title: "Custom CRM Development Services",
                heading: "YMake Better Customer Relationships With Custom CRM",
                description: "Tired of juggling multiple customer management tools? Ready to streamline your operations and delight your customers? Wizspeed's custom CRM solutions are here to revolutionize your business. Our team of experienced developers will work closely with you to create a CRM solution that aligns with your specific industry needs, providing a comprehensive solution for everything from lead generation and nurturing to customer support and retention. "
            },
            image: "/images/software-development-1.png"
        },
        'custom-erp': {
            title: 'Custom ERP',
            service: {
                title: "Creating Winning Stories Together",
                heading: "Transform Your Business With Custom ERP Solutions",
                description: "Our ERP software development services offer comprehensive solutions for businesses seeking to streamline operations, enhance efficiency, and drive growth. Our expert team designs, develops, and implements tailored Enterprise Resource Planning systems that integrate core business functions, such as finance, HR, supply chain management, and customer relationships, into a unified platform."
            },
            image: "/images/software-development-2.png"
        },
        'pos-development': {
            title: 'POS Development',
            service: {
                title: "Your Ultimate POS Solution",
                heading: "Level Up Your Business with Custom POS",
                description: "Say goodbye to clunky cash registers and hello to a POS system that's as smart as it is stylish. With Wizspeed, you're not just getting a tool but a business partner that helps you streamline operations, delight customers, and boost your bottom line.Our custom POS solutions are designed to fit your business like a glove. Whether you're a small boutique or a bustling restaurant, we've got the features and functionality you need to succeed. Our POS can handle everything from inventory management to customer loyalty programs."
            },
            image: "/images/software-development-3.png"
        }
    }

    const headData = {
        pill: "Web Development",
        title: "Web Development",
        highlightText: "That Drives Results",
        description: "We build fast, responsive, and scalable websites tailored to your business goals. Our solutions combine modern design with powerful functionality to help you grow online."
    }

    const stepsData = {
        'custom-crm': [
            {
                number: "01",
                title: "Turning Your CRM Vision into a Reality",
                description: "Explore how we collaborate to transform your unique needs into a custom-made customer relationship management (CRM) solution.",
                image: "/images/custom-crm-1.png"
            },
            {
                number: "02",
                title: "Get to Know Your Business",
                description: "We start by getting to know your business inside and out. Through comprehensive and immersive sessions, we uncover your unique challenges and strengths, equipping us with everything you need to succeed.",
                image: "/images/custom-crm-2.png"
            },
            {
                number: "03",
                title: "Dream It Up",
                description: "With your needs in mind, we put on our creative hats and design your dream CRM system. With our innovative approach and progressive style, you can look forward to a CRM that perfectly reflects your vision.",
                image: "/images/custom-crm-3.png"
            },
            {
                number: "04",
                title: "Build the Magic",
                description: "Our experienced developers will take your CRM app to the next level. Our best-in-class programming brings your vision to life, ensuring your CRM app is robust and delivers a seamless user experience.",
                image: "/images/custom-crm-4.png"
            },
            {
                number: "05",
                title: "Testing & Launch",
                description: "Before we launch the new system, we rigorously test your CRM for any potential issues. Once it's perfect, we launch it into action, and your team can begin getting up and running smoothly.",
                image: "/images/custom-crm-5.png"
            }
        ],
        'custom-erp': [
            {
                number: "01",
                title: "How We Work?",
                description: "Explore how we collaborate to transform your unique needs into a custom-made enterprise resource planning (ERP) software.",
                image: "/images/custom-erp-1.png"
            },
            {
                number: "02",
                title: "Project Planning",
                description: "We begin by understanding your goals and needs so you can get exactly what you need from the project. Then, we'll create a detailed project plan, keeping your timeline and resources in mind. Throughout the project, we'll provide strategic and conforming action plans and ensure you get an SEO-friendly site.",
                image: "/images/custom-erp-2.png"
            },
            {
                number: "03",
                title: "Design & Theme Creation",
                description: "With a visually appealing and user-friendly website, you can captivate your audience. Our creative team will develop wireframes, mockups, and detailed project plans to bring your vision to life. Our solutions combine modern design with powerful functionality to help you grow online.",
                image: "/images/custom-erp-3.png"
            },
            {
                number: "04",
                title: "Web Development",
                description: "Next, our developers will design a robust, fully functional website that meets your needs. From integrating your existing systems to content creation, our team will ensure your new website is fast, secure, reliable, and neat.",
                image: "/images/custom-erp-4.png"
            },
            {
                number: "05",
                title: "Website Launch",
                description: "Our work doesn't stop once the project is complete; without a proper launch, your project is incomplete. We'll ensure your website is fully optimized for search engines and ready for launch. Our team will provide ongoing support to ensure your website launch process smoothly and hassle-free.",
                image: "/images/custom-erp-5.png"
            }
        ],
        'pos-development': [
            {
                number: "01",
                title: "See Our Journey to a Custom Solution",
                description: "Explore how we collaborate to transform your unique needs into a custom made point-of-sale (POS) system.",
                image: "/images/pos-development-1.png"
            },
            {
                number: "02",
                title: "Spill the Beans",
                description: "We'll work closely with you to understand your unique business requirements, goals, and pain points. Together, we'll identify the features and functionalities that will drive your POS system's success.",
                image: "/images/pos-development-2.png"
            },
            {
                number: "03",
                title: "Design and Prototyping",
                description: "We'll create wireframe renderings of your POS system to visualize the user experience and system design. Our creative team will develop prototypes to bring your vision to life, and we'll refine the structure of your POS system before development begins.",
                image: "/images/pos-development-3.png"
            },
            {
                number: "04",
                title: "Development and Integration",
                description: "We'll employ agile development methodologies to ensure a smooth, timely, transparent, and collaborative process. Our POS system will integrate seamlessly with your existing systems, such as inventory management, accounting, and customer relationship management.",
                image: "/images/pos-development-4.png"
            },
            {
                number: "05",
                title: "Testing and Quality Assurance",
                description: "Our team will conduct thorough testing to identify and address any issues before the launch. We'll ensure that your POS system delivers a reliable, user-friendly, and efficient experience.",
                image: "/images/pos-development-5.png"
            }
        ]
    }

    const essentianlsData = {
        pill: "Level Up Your Sales Game",
        title: "Essential Features",
        highlightText: "for Your Success",
        description: "Boost your brand's presence with engaging content, smart strategies, and consistent growth across all major platforms. We turn followers into loyal customers through impactful social media marketing."
    }

    const essentialSteps = [
        {
            title: "Scalability",
            description: "Our solutions are designed to grow with your business, accommodating future needs.",
            image: "/images/essential-soft-1.svg"
        },
        {
            title: "Security and Reliability",
            description: "We employ robust security measures to safeguard your customer data, including encryption, firewalls.",
            image: "/images/essential-soft-2.svg"
        },
        {
            title: "Seamless Integration",
            description: "Our POS systems seamlessly integrate with your existing business operations.",
            image: "/images/essential-soft-3.svg"
        },
        {
            title: "Real-time Insights",
            description: "Gain valuable insights into sales performance, inventory levels, and customer behavior.",
            image: "/images/essential-soft-4.svg"
        }
    ]

    const [activeTab, setActiveTab] = useState(Object.keys(tabsData)[0] || '')

    return (
        <>
            <div className="service-page">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <ServiceHeader data={data} />
                    <img src="/images/headerCurveLeft.svg" alt="" className="" />
                    <img src="/images/headerRectangleMd.svg" alt="" className="" />
                    <img src="/images/headerRectangleSm.svg" alt="" className="" />
                </div>
            </div>
            <TrustedBy />
            <ServiceTabs headData={headData} tabsData={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
            <ServiceSteps stepsData={stepsData[activeTab]} />
            <ServiceEssentianls headData={essentianlsData} essentialSteps={essentialSteps} />
            <div className='pt-[120px] bg-brand-dark'>
                <FAQs />
            </div>
            <ServiceCoversion />
            <Footer />
        </>
    )
}

export { SoftwareDevelopment }