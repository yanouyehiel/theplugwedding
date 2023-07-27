import React from "react";
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const Hero3 = () => {
    return (

        <section className="wpo-hero-slider wpo-hero-style-3">
            <h2 className="hidden">some</h2>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        // install Swiper modules
                        modules={[Pagination, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        speed={1800}
                        parallax={true}
                    >
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/Slider-5.jpg'})` }}>
                            </div>
                            <div className="wpo-hero-text">
                                                <h2 className="text-hero" style={{color: 'black'}}>Titlefeufghruoigriugariego</h2>
                                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/Slider-6.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/Slider-7.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/Slider-8.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/Slider-9.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/Slider-10.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/Slider-11.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/Slider-12.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/Slider-13.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/Slider-14.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Hero3;