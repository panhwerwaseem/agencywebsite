import React from 'react'
import { FaArrowsAlt } from 'react-icons/fa'
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa6'

const HomeHeader = () => {
    return (
        <div className='home-header'>
            <h1>
                <span className='header-dot'>
                    DESIGN
                </span>
                <span className='flex items-center'>
                    {/* Rotating Circle + Video Behind DEVELOP */}
                    <div className='flex items-center'>
                        {/* Rotating Circle */}
                        <div className="rotating-circle-btn flex items-center justify-center relative" style={{ width: 140, height: 140, background: '#FC5E14', }}>
                            <svg viewBox="0 0 120 120" width="120" height="120" className="absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full overflow-visible p-1">
                                <defs>
                                    <path id="circlePath" d="M60,8 a52,52 0 1,1 0,104 a52,52 0 1,1 0,-104" />
                                </defs>
                                <text fill="#fff" fontSize="14" fontFamily="'Manrope', sans-serif">
                                    <textPath xlinkHref="#circlePath" startOffset="0%">
                                        LET'S CHAT&nbsp;&nbsp;LET'S CHAT&nbsp;&nbsp;LET'S CHAT&nbsp;&nbsp;LET'S CHAT
                                    </textPath>
                                </text>
                            </svg>
                            <div className="flex items-center justify-center -rotate-45" style={{ width: 60, height: 60, borderRadius: '50%', background: 'transparent', zIndex: 1 }}>
                                <FaArrowRight size={30} />
                            </div>
                        </div>
                        {/* Video */}
                        <div className='w-56 h-32 rounded-[50%] -ml-7'>
                            <video src="/images/travelica-vid-1.mp4" autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '60px' }} />
                        </div>
                    </div>
                    {/* DEVELOP Text (on top) */}
                    <span className='header-dot' style={{ position: 'relative', zIndex: 1 }}>
                        DEVELOP
                    </span>
                </span>
                <span className='text-orange header-dot'>
                    ADVERTISE
                </span>
            </h1>
            <p className='text-gray-800 max-w-[660px] sm:mt-[40px] sm:mb-[50px] mt-[24px] mb-[32px]'>
                Engaging stories resonate with your audience, building loyalty. Let your brand's purpose shine through compelling narratives.
            </p>
            <div className="hdr-btm flex justify-between items-end">
                <div className="btn-group">
                    <a href="" className="btn-orange">
                        <span>
                            <FaArrowsAlt />
                        </span>
                        LET'S GET STARTED
                    </a>
                    <a href="" className="btn-gray">
                        SCROLL TO DISCOVER
                    </a>
                </div>
                <div className="right-hdr">
                    <img src="/images/flower-orange.svg" alt="" className="flwr-orange" />
                    <div className="h-px w-[60px] bg-gray-900 my-[3px]"></div>
                    <p className='text-gray-900'>Transform Your Digital <br /> Impact with Wizspeed</p>
                </div>
            </div>

            <div className="clients">
                <div className="flex">
                    <img src='./images/headerUser.png' />
                    <img src='./images/headerUser.png' />
                    <img src='./images/headerUser.png' />
                    <img src='./images/headerUser.png' />
                </div>
                <span>
                    <strong>100+</strong>
                    Satisficed clients
                </span>
            </div>
        </div>
    )
}

export default HomeHeader