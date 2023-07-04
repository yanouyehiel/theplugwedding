import React from "react";
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import shape1 from '/public/images/slider/Slider-11.jpg'
import shape2 from '/public/images/slider/Slider-12.jpg'
import Image from 'next/image'
import Link from "next/link";

const Hero6 = () => {
    return (

        <section className="wpo-hero-slider wpo-hero-slider-s3">
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
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-9.jpg'})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content-wrap">
                                            <div className="shape-1"><Image src={shape1} alt="" /></div>
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>Plan Your Dream With Us</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>India's Favorite wedding planning platform to plan your wedding with
                                                        authentic vendors! </p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div data-swiper-parallax="500" className="slide-btns">
                                                    <Link href="/rsvp" className="theme-btn">Contact Now</Link>
                                                </div>
                                            </div>
                                            <div className="shape-2"><Image src={shape2} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-10.jpg'})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content-wrap">
                                            <div className="shape-1"><Image src={shape1} alt="" /></div>
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>Plan Your Dream With Us</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>India's Favorite wedding planning platform to plan your wedding with
                                                        authentic vendors! </p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div data-swiper-parallax="500" className="slide-btns">
                                                    <Link href="/rsvp" className="theme-btn">Contact Now</Link>
                                                </div>
                                            </div>
                                            <div className="shape-2"><Image src={shape2} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-11.jpg'})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content-wrap">
                                            <div className="shape-1"><Image src={shape1} alt="" /></div>
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>Plan Your Dream With Us</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>India's Favorite wedding planning platform to plan your wedding with
                                                        authentic vendors! </p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div data-swiper-parallax="500" className="slide-btns">
                                                    <Link href="/rsvp" className="theme-btn">Contact Now</Link>
                                                </div>
                                            </div>
                                            <div className="shape-2"><Image src={shape2} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-12.jpg'})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content-wrap">
                                            <div className="shape-1"><Image src={shape1} alt="" /></div>
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>Plan Your Dream With Us</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>India's Favorite wedding planning platform to plan your wedding with
                                                        authentic vendors! </p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div data-swiper-parallax="500" className="slide-btns">
                                                    <Link href="/rsvp" className="theme-btn">Contact Now</Link>
                                                </div>
                                            </div>
                                            <div className="shape-2"><Image src={shape2} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${'/images/slider/slide-13.jpg'})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content-wrap">
                                            <div className="shape-1"><Image src={shape1} alt="" /></div>
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>Plan Your Dream With Us</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>India's Favorite wedding planning platform to plan your wedding with
                                                        authentic vendors! </p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div data-swiper-parallax="500" className="slide-btns">
                                                    <Link href="/rsvp" className="theme-btn">Contact Now</Link>
                                                </div>
                                            </div>
                                            <div className="shape-2"><Image src={shape2} alt="" /></div>
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

export default Hero6;