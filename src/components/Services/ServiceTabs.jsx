import React, { useState } from 'react'
import { FaGlobe } from 'react-icons/fa6'

const ServiceTabs = ({
    headData = {
        pill: "See How Our Services Make Us Tick Us",
        title: "WHAT WE",
        highlightText: "DO BEST",
        description: "We don't sell our digital marketing and web design services in a hit-or-miss manner. Instead, we cater to your problems through our targeted services, including:"
    },
    tabsData = {},
    className = ""
}) => {
    const [activeTab, setActiveTab] = useState(Object.keys(tabsData)[0] || '')

    const currentTab = tabsData[activeTab]

    if (!Object.keys(tabsData).length) {
        return <div>No tabs data provided</div>
    }

    return (
        <div className={`service-tabs`}>
            <div className="container">
                <div className="head-cont">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        {headData.pill}
                    </div>
                    <h2 className="head-h2">
                        {headData.title} <span className="text-orange">{headData.highlightText}</span>
                    </h2>
                    <p className="text-gray-900 text-center">
                        {headData.description}
                    </p>
                </div>

                {/* Main Tabs */}
                <div className="flex flex-wrap justify-center gap-4 sm:my-12 my-8 max-w-4xl mx-auto">
                    {Object.entries(tabsData).map(([key, tab]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
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

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-5 grid-cols-1 gap-5">
                    {/* Left Column - Services List */}
                    <div className="results-tab lg:col-span-2">
                        {currentTab?.service && (
                            <>
                                <div className="head-pill w-fit">
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    {currentTab.service.title}
                                </div>
                                <h3 className="text-2xl font-semibold mt-4 mb-7">
                                    {currentTab.service.heading}
                                </h3>
                                {currentTab.service.description && (
                                    <p className="text-gray-700">
                                        {currentTab.service.description}
                                    </p>
                                )}
                            </>
                        )}
                    </div>

                    <img
                        src={currentTab.image}
                        alt={currentTab.title}
                        className="rounded-lg shadow-2xl w-full h-auto lg:col-span-3 aspect-video"
                    />


                </div>
            </div>
        </div>
    )
}

export default ServiceTabs