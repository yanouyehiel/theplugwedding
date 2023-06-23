import React from "react";
import Slider from "react-slick";
import Image from 'next/image'

import hero1 from '/public/images/slider/h1.png'
import hero2 from '/public/images/slider/h2.png'
import hero3 from '/public/images/slider/h3 2.png'
import hero4 from '/public/images/slider/h4.png'


var settings = {
    dots: false,
    arrows: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding:'0',
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const HeroArray = [
    {
        hImg: hero1,
        title: 'Love',
    },
    {
        hImg: hero2,
        title: 'Affection',
    },
    {
        hImg: hero3,
        title: 'Feelings',
    },
    {
        hImg: hero4,
        title: 'Happy',
    },
]


const Hero = () => {
    return (

        <section className="wpo-hero-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="wpo-hero-items">
                        <Slider {...settings} className='slide-btn'>
                            {
                                HeroArray.map((hero, hr) => (
                                    <div className="wpo-hero-item" key={hr}>
                                        <div className="wpo-hero-img">
                                            <Image src={hero.hImg} alt="" />
                                            <div className="wpo-hero-text">
                                                <h2 className="text-hero">{hero.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;