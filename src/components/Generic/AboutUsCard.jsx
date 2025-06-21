import React from 'react'

const AboutUsCard = ({ data }) => {
    console.log(data)
    return (
        <div className='abt-card'>
            <h3>
                {data?.title}
            </h3>
            <p>
                {data?.description}
            </p>
            <img src={data?.imgsrc} alt="" />
        </div>
    )
}

export default AboutUsCard