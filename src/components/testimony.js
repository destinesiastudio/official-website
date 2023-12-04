import React from 'react'

const Testimony = ({ leftHighlight, leftText, rightHighlight, rightText }) => {
    return (
        <section className='max-w-7xl flex mt-24 mx-auto text-white'>
            <div className='flex-1 shadow-lg shadow-red-500/50 rounded-lg bg-black-600 p-12 mr-24'>
                { leftHighlight }
                <span className='text-white/[.6]'>{ leftText }</span>
            </div>
            <div className='flex-1 shadow-lg shadow-red-500/50 rounded-lg bg-black-600 p-12'>
                { rightHighlight }
                <span className='text-white/[.6]'>{ rightText }</span>
            </div>
        </section>
    )
}

export default Testimony