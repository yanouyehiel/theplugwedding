import React from "react";
import Slider from "react-slick";
import Image from 'next/image'
import Slides from "../../api/slides";


var settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding:'0',
    /*responsive: [
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
    ]*/
};


const Hero = () => {
    return (

        <section className="wpo-hero-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="wpo-hero-items">
                        <Slider {...settings} className='slide-btn'>
                            {
                                Slides.map((slide) => (
                                    <div className="wpo-hero-item" key={slide.id}>
                                        <div className="wpo-hero-img">
                                            <Image src={slide.path} alt={slide.path} width={4000} height={100} />
                                            <div className="wpo-hero-text">
                                                <h2 className="text-hero"></h2>
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