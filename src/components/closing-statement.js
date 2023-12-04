import React from 'react'

const ClosingStatement = ({ tagLine, title, description }) => {
    return (
        <section className='flex flex-col content-center flex-wrap text-center text-white bg-black-600 py-24'>
            <p className='w-fit border-l-2 border-red-600 text-sm mx-auto pl-8'>{ tagLine }</p>
            <h2 className='max-w-3xl mt-8 text-3xl md:text-5xl'>{ title }</h2>
            <p className='max-w-3xl mt-8 text-white/[.6]'>
                { description }
            </p>
        </section>
    )
}

export default ClosingStatement