import React from "react";
import hero1 from '/public/images/slider/Slider-1.jpg'
import hero2 from '/public/images/slider/Slider-2.jpg'
import hero3 from '/public/images/slider/Slider-3.jpg'
import Image from 'next/image'


const Hero4 = () => {
    return (

        <section className="wpo-static-hero">
            <div className="container-fluid">
                <div className="wpo-hero-date">
                    <h2>Esabella & William</h2>
                    <p>We Are Getting Married November 15,2022</p>
                </div>
                <div className="wpo-hero-img-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="wpo-hero-img">
                                <Image src={hero1} alt=""/>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="wpo-hero-img">
                                <Image src={hero2} alt=""/>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="wpo-hero-img">
                                <Image src={hero3} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero4;