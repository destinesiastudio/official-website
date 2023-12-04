import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'

const Landing = ({ title, slides }) => {
    return (
        <>
            <div className='max-w-6xl mx-auto mt-48'>
            <h1 className='font-semibold text-3xl md:text-5xl mb-12'>{ title }</h1>
            </div>

            <div className='relative mt-12'>
                <div className='absolute left-0 right-0 top-0 bottom-0 h-2/3 my-auto bg-gradient-to-r from-red-500 to-red-600' />
                <div className='max-w-6xl mx-auto border-8 border-red-500 rounded'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {slides && slides.map((slide, i) => (
                            <SwiperSlide key={i}>
                                {slide}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </>
    )
}

export default Landing