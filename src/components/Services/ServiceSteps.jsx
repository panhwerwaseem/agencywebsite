import React from 'react'

const ServiceSteps = ({ stepsData }) => {

    return (
        <div className="service-steps">
            <div className="container">
                {
                    stepsData?.map((step, index) => {
                        if (step?.number % 2 == 0) {
                            return (
                                (
                                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-[230px] my-12'>
                                        <img src={step?.image} alt={step?.title} className='rounded-xl' />
                                        <div className={`right-step flex flex-col gap-4 justify-center `}>
                                            <span className="number">{step?.number}</span>
                                            <h3 className='text-3xl font-space-grotesk text-white'>{step?.title}</h3>
                                            <p className='text-gray-700'>{step?.description}</p>
                                        </div>
                                    </div>
                                )
                            )
                        } else {
                            return (
                                <div className='grid lg:grid-cols-2 grid-cols-1 gap-[230px]'>
                                    <div className={`left-step flex flex-col gap-4 justify-center ${step?.number == '01' ? 'first' : step?.number == '05' ? 'last' : ''}`}>
                                        <span className="number">{step?.number}</span>
                                        <h3 className='text-3xl font-space-grotesk text-white'>{step?.title}</h3>
                                        <p className='text-gray-700'>{step?.description}</p>
                                    </div>
                                    <img src={step?.image} alt={step?.title} className='rounded-xl' />
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ServiceSteps