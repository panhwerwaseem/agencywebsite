import React from 'react'

const RecentWork = () => {

    const recentWork = [
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        }
    ]

    return (
        <div className='recent-work-section'>
            <div className="container">
                <div className="head-cont max-w-[890px]">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Recent Work
                    </div>
                    <h2 className="head-h2">
                        Transformations That <span className="text-orange">Speak for Themselves</span>
                    </h2>
                    <p className="text-gray-900 text-center max-w-[710px] mx-auto">
                        From bold website redesigns to high-converting ad campaigns, discover how we turn ideas into measurable outcomes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:mt-16 mt-10">
                    {
                        recentWork?.map((work, index) => {
                            return (
                                <div className='recent-work-card' key={index}>
                                    <img src={work?.img} alt="" />
                                    <div className="recent-content">
                                        <span>
                                            <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                            {work?.tag}
                                        </span>
                                        <h4>
                                            {
                                                work?.title
                                            }
                                        </h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentWork