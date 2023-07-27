import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from "react-awesome-reveal";




const Hero2 = () => {
    return (

        <section className="wpo-hero-slider wpo-hero-style-2">
            <div className="wedding-announcement">
                <div className="couple-text">
                    <Slide direction="up" cascade>
                        <h2>Planning Your Everlasting Memories</h2>
                        <p>Let’s Make Your Day Memorable.Your Successful
                            Wedding is Our Job.</p>
                    </Slide>
                </div>
            </div>

            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        speed={1800}
                        parallax={true}
                        navigation
                    >
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-1.jpg'})` }}>
                                <div className="slide-inner slide-bg-image">
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-2.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-3.jpg'})` }}>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Hero2;