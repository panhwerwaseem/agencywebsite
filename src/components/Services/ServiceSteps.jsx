import React, { useRef, useEffect, useState } from 'react'

const ServiceSteps = ({ stepsData }) => {
    const stepRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            const triggerPoint = viewportHeight * 0.2; // 20% from top

            let foundIndex = null;
            stepRefs.current.forEach((ref, idx) => {
                if (!ref) return;
                const rect = ref.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= triggerPoint && foundIndex === null) {
                    foundIndex = idx;
                }
            });

            // If none found (e.g. scrolled past all), fallback to closest to top
            if (foundIndex === null) {
                const offsets = stepRefs.current.map(ref => {
                    if (!ref) return Number.POSITIVE_INFINITY;
                    const rect = ref.getBoundingClientRect();
                    return Math.abs(rect.top - triggerPoint);
                });
                foundIndex = offsets.indexOf(Math.min(...offsets));
            }

            setActiveIndex(foundIndex);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [stepsData]);

    return (
        <div className="service-steps">
            <div className="container">
                {
                    stepsData?.map((step, index) => {
                        const isActive = activeIndex === index;
                        if (step?.number % 2 == 0) {
                            return (
                                <div
                                    key={index}
                                    ref={el => stepRefs.current[index] = el}
                                    data-index={index}
                                    className={`grid lg:grid-cols-2 grid-cols-1 gap-[230px] my-12 ${isActive ? 'active-step' : ''}`}
                                >
                                    <img src={step?.image} alt={step?.title} className='rounded-xl aspect-square max-h-[420px] w-full' />
                                    <div className="right-step flex flex-col gap-4 justify-center ">
                                        <span className="number">{step?.number}</span>
                                        <h3 className='text-3xl font-space-grotesk text-white'>{step?.title}</h3>
                                        <p className='text-gray-700'>{step?.description}</p>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div
                                    key={index}
                                    ref={el => stepRefs.current[index] = el}
                                    data-index={index}
                                    className={`grid lg:grid-cols-2 grid-cols-1 gap-[230px] ${isActive ? 'active-step' : ''}`}
                                >
                                    <div className={`left-step flex flex-col gap-4 justify-center ${step?.number == '01' ? 'first' : step?.number == '05' ? 'last' : ''}`}>
                                        <span className="number">{step?.number}</span>
                                        <h3 className='text-3xl font-space-grotesk text-white'>{step?.title}</h3>
                                        <p className='text-gray-700'>{step?.description}</p>
                                    </div>
                                    <img src={step?.image} alt={step?.title} className='rounded-xl aspect-square max-h-[420px] w-full' />
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