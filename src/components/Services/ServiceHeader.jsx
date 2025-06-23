import React from 'react'

const ServiceHeader = ({ data }) => {
    return (
        <div className='service-header'>
            <div className="head-pill">
                <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                {data?.pill}
            </div>
            <h1>
                <span className='text-orange'>
                    {data?.titleOrange}
                </span>
                {
                    data?.title
                }
            </h1>
            <p>
                {
                    data?.description
                }
            </p>
        </div>
    )
}

export default ServiceHeader