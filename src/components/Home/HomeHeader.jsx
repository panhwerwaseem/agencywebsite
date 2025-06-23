import React from 'react'
import { FaArrowsAlt } from 'react-icons/fa'

const HomeHeader = () => {
    return (
        <div className='home-header'>
            <h1>
                <span className='header-dot'>
                    DESIGN
                </span>
                <span>
                    <span>

                    </span>
                    <span className='header-dot'>
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