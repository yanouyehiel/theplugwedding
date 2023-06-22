import React from "react";
import hero1 from '/public/images/slider/couple.png'
import hero2 from '/public/images/slider/frame.png'
import shape1 from '/public/images/slider/shape5.png'
import shape2 from '/public/images/slider/shape6.png'
import TimeCountDown from "../countdown";
import Image from 'next/image'



const Hero5 = () => {
    return (
        <section className="static-hero-s2">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="shape-1"><Image src={shape1} alt=""/></div>
                                    <div className="slide-title">
                                        <h2>Srivalli & Bhuban</h2>
                                    </div>
                                    <div className="slide-text">
                                        <p>We Are Getting Married Jul 8, 2022</p>
                                    </div>
                                    <div className="wpo-wedding-date">
                                        <div className="clock-grids">
                                            <TimeCountDown/>
                                        </div>
                                    </div>
                                    <div className="shape-2"><Image src={shape2} alt=""/></div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-12">
                                <div className="static-hero-right">
                                    <div className="static-hero-img">
                                        <div className="static-hero-img-inner">
                                            <Image src={hero1} alt=""/>
                                        </div>
                                    </div>
                                    <div className="static-hero-shape"><Image src={hero2} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero5;