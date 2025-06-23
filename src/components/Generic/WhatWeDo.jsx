import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowRightLong, FaGlobe, FaRightLong } from 'react-icons/fa6'

const WhatWeDo = () => {
    const [activeTab, setActiveTab] = useState('web-development')
    const [activeService, setActiveService] = useState('ios')

    const tabsData = {
        'web-development': {
            title: 'Web Development',
            description: "We don't sell our digital marketing and web design services in a hit-or-miss manner. Instead, we cater to your problems through our targeted services, including:",
            services: [
                { id: 'responsive', name: 'Responsive Design', icon: '🎨' },
                { id: 'frontend', name: 'Frontend Development', icon: '💻' },
                { id: 'backend', name: 'Backend Development', icon: '⚙️' },
                { id: 'fullstack', name: 'Full Stack Solutions', icon: '🔧' }
            ],
            images: {
                responsive: '/images/whatwe.png',
                frontend: '/images/whatwe.png',
                backend: '/images/whatwe.png',
                fullstack: '/images/whatwe.png'
            }
        },
        'digital-marketing': {
            title: 'Digital Marketing',
            description: "Our comprehensive digital marketing strategies help you reach your target audience effectively and drive measurable results for your business.",
            services: [
                { id: 'seo', name: 'SEO Optimization', icon: '🔍' },
                { id: 'social', name: 'Social Media Marketing', icon: '📱' },
                { id: 'ppc', name: 'PPC Advertising', icon: '💰' },
                { id: 'content', name: 'Content Marketing', icon: '📝' }
            ],
            images: {
                seo: '/images/whatwe.png',
                social: '/images/whatwe.png',
                ppc: '/images/whatwe.png',
                content: '/images/whatwe.png'
            }
        },
        'software-development': {
            title: 'Software Development',
            description: "Custom software solutions tailored to your business needs, built with cutting-edge technologies and industry best practices.",
            services: [
                { id: 'custom', name: 'Custom Software', icon: '⚡' },
                { id: 'saas', name: 'SaaS Applications', icon: '☁️' },
                { id: 'api', name: 'API Development', icon: '🔗' },
                { id: 'integration', name: 'System Integration', icon: '🔄' }
            ],
            images: {
                custom: '/images/whatwe.png',
                saas: '/images/whatwe.png',
                api: '/images/whatwe.png',
                integration: '/images/whatwe.png'
            }
        },
        'app-development': {
            title: 'App Development',
            description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices and platforms.",
            services: [
                { id: 'ios', name: 'iOS Development', icon: '📱' },
                { id: 'android', name: 'Android Development', icon: '🤖' },
                { id: 'static', name: 'Static Development', icon: '📄' },
                { id: 'dynamic', name: 'Dynamic Development', icon: '⚡' }
            ],
            images: {
                ios: '/images/whatwe.png',
                android: '/images/whatwe.png',
                static: '/images/whatwe.png',
                dynamic: '/images/whatwe.png'
            }
        }
    }

    const currentTab = tabsData[activeTab]
    const currentImage = currentTab.images[activeService] || Object.values(currentTab.images)[0]

    return (
        <div className="what-we-do">
            <div className="container">
                <div className="head-cont">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        See How Our Services Make Us Tick Us
                    </div>
                    <h2 className="head-h2">
                        WHAT WE <span className="text-orange">DO BEST</span>
                    </h2>
                    <p className="text-gray-900 text-center">
                        We don't sell our digital marketing and web design services in a hit-or-miss manner. Instead, we cater to your problems through our targeted services, including:
                    </p>
                </div>

                {/* Main Tabs */}
                <div className="flex flex-wrap justify-center gap-4 sm:my-12 my-8">
                    {Object.entries(tabsData).map(([key, tab]) => (
                        <button
                            key={key}
                            onClick={() => {
                                setActiveTab(key)
                                setActiveService(Object.keys(tab.images)[0])
                            }}
                            className={`px-6 py-2 flex gap-2 items-center rounded-full border transition-all duration-300 ${activeTab === key
                                ? 'bg-orange-500 text-white border-orange-500'
                                : 'bg-transparent text-gray-900 border-gray-600 hover:border-orange-500 hover:text-orange-500'
                                }`}
                        >
                            <FaGlobe />
                            {tab.title}
                        </button>
                    ))}
                </div>

                <div className="relative">
                    <div className="border-t border-gray-900">
                        {currentTab.services.map((service, index) => (
                            <div
                                key={service.id}
                                onClick={() => setActiveService(service.id)}
                                className={`flex items-center lg:gap-10 md:gap-8 gap-6 py-9 cursor-pointer transition-all duration-300 border-b border-gray-900`}
                            >
                                <div className={`md:text-4xl text-2xl font-bold ${activeService === service.id ? 'text-white' : 'text-gray-900'}`}>
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <div className="flex-1">
                                    <h3 className={`md:text-4xl text-2xl font-semibold flex items-center gap-2 ${activeService === service.id ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {service.name}
                                        {
                                            activeService === service.id && <span className={`ml-4 ${activeService === service.id ? 'text-white' : 'text-gray-900'}`}>
                                                <FaArrowRightLong />
                                            </span>
                                        }
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex justify-center absolute top-4 right-10 max-w-[450px] h-[430px] rotate-3">
                        <div className="relative">
                            <img
                                src={currentImage}
                                alt={currentTab.services.find(s => s.id === activeService)?.name || 'Service'}
                                className="rounded-lg shadow-2xl max-w-full h-full transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo