import React from "react";
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero8 = () => {
    return (

        <section className="wpo-hero-slider wpo-hero-slider-s4">
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
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-18.jpg'})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content-wrap">
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>New Arrival Makeup Kit</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>Let’s Make Your Day Memorable.Your Successful Wedding is Our Job.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div>
                                                    <Link onClick={ClickHandler} href="/shop" className="theme-btn">Featured Products</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-17.jpg'})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content-wrap">
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>New Arrival Makeup Kit</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>Let’s Make Your Day Memorable.Your Successful Wedding is Our Job.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div>
                                                    <Link onClick={ClickHandler} href="/shop" className="theme-btn">Featured Products</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-16.jpg'})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content-wrap">
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>New Arrival Makeup Kit</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>Let’s Make Your Day Memorable.Your Successful Wedding is Our Job.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div>
                                                    <Link onClick={ClickHandler} href="/shop" className="theme-btn">Featured Products</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Hero8;