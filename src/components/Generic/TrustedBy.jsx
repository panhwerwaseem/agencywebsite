import React from 'react'
import Marquee from 'react-fast-marquee'

const TrustedBy = () => {
    const logos = [
        {
            img: '/images/feedly.png',
            title: 'feedly',
        },
        {
            img: '/images/feedly.png',
            title: 'feedly',
        },
        {
            img: '/images/feedly.png',
            title: 'feedly',
        },
        {
            img: '/images/feedly.png',
            title: 'feedly',
        },
        {
            img: '/images/feedly.png',
            title: 'feedly',
        },
        {
            img: '/images/feedly.png',
            title: 'feedly',
        },
    ]
    return (
        <div className='trusted-by'>
            <div className="container">
                <div className="head-cont">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        See The WizSpeed Clients
                    </div>
                    <h2 className="head-h2">
                        Trusted by <span className="text-orange">Customers</span>
                    </h2>
                    <p className="text-gray-900 text-center">
                        We have helped various clients to achieve their digital goals through our web design, development, and digital marketing services.
                    </p>
                </div>
            </div>
            <div className="sm:mt-[50px] mt-[32px] sm:mb-7 mb-4">
                <Marquee speed={20} gradient={false} pauseOnHover={true} autoFill={true}>
                    {logos.map((src, index) => (
                        <div key={index} className='trust-img mx-[12px]'>
                            <img
                                src={src?.img}
                                alt={src?.title}
                                className=""
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
            <div className="">
                <Marquee speed={20} gradient={false} pauseOnHover={true} autoFill={true} direction='right'>
                    {logos.map((src, index) => (
                        <div key={index} className='trust-img mx-[12px]'>
                            <img
                                src={src?.img}
                                alt={src?.title}
                                className=""
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default TrustedBy