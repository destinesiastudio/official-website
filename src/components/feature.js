import React from 'react'

const Feature = ({ className, isInverted, image, description }) => {

    return (
        <section className={'flex flex-col ' + className}>
            <div className={`flex flex-col md:flex-row justify-center items-stretch ${isInverted ? 'md:flex-row-reverse' : ''}`}>
                <div className='flex-1 md:px-0'>
                    { image }
                </div>

                <div className={`${isInverted ? 'md:border-r-2 md:items-start' : 'md:border-l-2 md:items-end'} items-stretch flex-2 px-24 pt-8 md:pt-0 z-10 backdrop-blur flex flex-col justify-center`}>
                    <p className='max-w-screen-sm text-lg'>{ description }</p>
                </div>
            </div>
        </section>
    )
}

export default Feature