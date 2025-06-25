import React from 'react'
import Slider from 'react-slick'
import ProjectCard from './ProjectCard'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Custom arrow components
const PrevArrow = ({ onClick }) => (
    <button className="slick-prev-custom" onClick={onClick}>
        <BsArrowLeft />
    </button>
)

const NextArrow = ({ onClick }) => (
    <button className="slick-next-custom" onClick={onClick}>
        <BsArrowRight />
    </button>
)

const Projects = ({ className }) => {
    // Sample project data matching the screenshot
    const projectsData = [
        {
            id: 1,
            category: "Landing Page UI",
            title: "Model Agency",
            description: "Creating An Impactful Digital Gallery Of Passion And Expertise",
            image: "/images/project-1.jpg" // Replace with actual image path
        },
        {
            id: 2,
            category: "Website",
            title: "Mindfulness",
            description: "Harmonising Mind, Body, And Design",
            image: "/images/project-2.jpg" // Replace with actual image path
        },
        {
            id: 3,
            category: "Posts",
            title: "Mindfulness",
            description: "Harmonising Mind, Body, And Design",
            image: "/images/project-3.jpg" // Replace with actual image path
        },
        {
            id: 4,
            category: "Brand Identity",
            title: "Mindfulness",
            description: "Harmonising Mind, Body, And Design",
            image: "/images/project-4.png" // Replace with actual image path
        }
    ]

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        // prevArrow: <PrevArrow />,
        // nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <section className="projects-section">
            <div className="project-inner">
                <div className="container">
                    <div className="projects-header">
                        <div>
                            <div className="projects-badge">
                                <img src="/images/flower-orange.svg" alt="" className="flwr-orange" />
                                <span>OUR Portfolio</span>
                            </div>
                            <h2>WHAT WE DO BEST</h2>
                            <p className='max-w-[640px]'>We don't sell our digital marketing and web design services in a hit-or-miss manner. Instead, we cater to your problems through our targeted services, including:</p>
                        </div>
                        <button className="view-all-btn">View All Projects</button>
                    </div>

                    <div className="projects-slider">
                        <Slider {...sliderSettings}>
                            {projectsData.map((project) => (
                                <div key={project.id} className="project-slide">
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects