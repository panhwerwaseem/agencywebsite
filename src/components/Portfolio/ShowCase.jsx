import React from 'react'

const ShowCase = () => {
    return (
        <div className='showcase-section'>
            <div className="container">
                <div className="head-cont">

                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Recent Work
                    </div>
                    <h2 className="head-h2">
                        Website <span className="text-orange">ShowCase</span>
                    </h2>
                    <p className="text-gray-900 text-center">
                        From bold website redesigns to high-converting ad campaigns, discover how we turn ideas into measurable outcomes.
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:mt-16 mt-10 mb-10 min-h-[600px]">
                    <div className='grid grid-flow-col grid-rows-2 gap-5'>
                        <img src="/images/showcase-1.jpg" alt="" className='w-full h-full object-cover rounded-xl' />
                        <img src="/images/showcase-2.jpg" alt="" className='w-full h-full object-cover rounded-xl' />
                    </div>

                    <div className=''>
                        <img src="/images/showcase-3.jpg" alt="" className='w-full h-full object-cover rounded-xl' />
                    </div>

                    <div className='grid grid-flow-col grid-rows-5 gap-5'>
                        <img src="/images/showcase-1.jpg" alt="" className='w-full h-full object-cover rounded-xl row-span-2' />
                        <img src="/images/showcase-2.jpg" alt="" className='w-full h-full object-cover rounded-xl row-span-3' />
                    </div>

                    <div className='grid grid-flow-col grid-rows-5 gap-5'>
                        <img src="/images/showcase-1.jpg" alt="" className='w-full h-full object-cover rounded-xl row-span-3' />
                        <img src="/images/showcase-2.jpg" alt="" className='w-full h-full object-cover rounded-xl row-span-2' />
                    </div>
                </div>

                <a href="" className="btn-white w-fit mx-auto h-[58px] px-5">
                    View All Projects
                </a>
            </div>
        </div>
    )
}

export default ShowCase