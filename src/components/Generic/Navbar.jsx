import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [activeServiceCategory, setActiveServiceCategory] = useState('web-development');

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMobileServices = () => {
        setIsMobileServicesOpen(!isMobileServicesOpen);
    };

    const handleCategoryClick = (category) => {
        setActiveServiceCategory(category);
    };

    const serviceData = {
        'web-development': [
            'Custom Web Design',
            'Web Flow',
            'Wix',
            'WordPress',
            'Shopify',
            'E-Commerce',
            'Square Space',
            'Responsive Design'
        ],
        'digital-marketing': [
            'SEO Optimization',
            'Google Ads',
            'Social Media Marketing',
            'Content Marketing',
            'Email Marketing',
            'Analytics & Reporting',
            'Brand Strategy',
            'PPC Campaigns'
        ],
        'app-development': [
            'iOS Apps',
            'Android Apps',
            'React Native',
            'Flutter',
            'Progressive Web Apps',
            'Mobile UI/UX',
            'App Store Optimization',
            'Cross-Platform'
        ],
        'software-development': [
            'Custom Software',
            'API Development',
            'Database Design',
            'Cloud Solutions',
            'Enterprise Systems',
            'Integration Services',
            'Maintenance & Support',
            'Quality Assurance'
        ]
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/" className="logo-link">
                        <img src="./images/logo.png" alt="Logo" className="logo-image" />
                    </a>
                </div>

                <div className="navbar-menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle">
                                Services
                                <FaChevronDown />
                            </a>
                            <div className="dropdown-menu">
                                <div className="dropdown-content">
                                    <div className="dropdown-left">
                                        <div
                                            className={`service-category ${activeServiceCategory === 'web-development' ? 'active' : ''}`}
                                            onClick={() => handleCategoryClick('web-development')}
                                        >
                                            <div className="category-icon">
                                                <img src="./images/service1.svg" alt="" />
                                            </div>
                                            <span>Web Development</span>
                                        </div>
                                        <div
                                            className={`service-category ${activeServiceCategory === 'digital-marketing' ? 'active' : ''}`}
                                            onClick={() => handleCategoryClick('digital-marketing')}
                                        >
                                            <div className="category-icon">
                                                <img src="./images/service2.svg" alt="" />
                                            </div>
                                            <span>Digital Marketing</span>
                                        </div>
                                        <div
                                            className={`service-category ${activeServiceCategory === 'app-development' ? 'active' : ''}`}
                                            onClick={() => handleCategoryClick('app-development')}
                                        >
                                            <div className="category-icon">
                                                <img src="./images/service3.svg" alt="" />
                                            </div>
                                            <span>App Development</span>
                                        </div>
                                        <div
                                            className={`service-category ${activeServiceCategory === 'software-development' ? 'active' : ''}`}
                                            onClick={() => handleCategoryClick('software-development')}
                                        >
                                            <div className="category-icon">
                                                <img src="./images/service4.svg" alt="" />
                                            </div>
                                            <span>Software Development</span>
                                        </div>
                                    </div>
                                    <div className="dropdown-right">
                                        <div className="service-grid">
                                            {serviceData[activeServiceCategory].map((service, index) => (
                                                <a href="#" key={index} className="service-link">{service}</a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-arrow"></div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="/work" className="nav-link">Work</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-auth">
                    <a href="/login" className="btn-orange px-5">Login</a>
                    <a href="/register" className="btn-gray px-5">Register</a>
                </div>

                {/* Mobile menu button */}
                <div className="mobile-menu-btn">
                    <button className="menu-icon" onClick={toggleMobileMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <ul className="mobile-nav">
                    <li><a href="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
                    <li className="mobile-dropdown">
                        <button className="mobile-nav-link" onClick={toggleMobileServices}>
                            Services <i className={`fas fa-chevron-down ${isMobileServicesOpen ? 'rotate' : ''}`}></i>
                        </button>
                        <div className={`mobile-dropdown-content ${isMobileServicesOpen ? 'mobile-dropdown-open' : ''}`}>
                            <a href="#" className="mobile-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Web Development</a>
                            <a href="#" className="mobile-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Digital Marketing</a>
                            <a href="#" className="mobile-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>App Development</a>
                            <a href="#" className="mobile-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Software Development</a>
                        </div>
                    </li>
                    <li><a href="/work" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Work</a></li>
                    <li><a href="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
                    <li><a href="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a></li>
                    <li className="mobile-auth">
                        <a href="/login" className="btn btn-login" onClick={() => setIsMobileMenuOpen(false)}>Login</a>
                        <a href="/register" className="btn btn-register" onClick={() => setIsMobileMenuOpen(false)}>Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar