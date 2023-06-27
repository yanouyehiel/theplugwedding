import React from "react";
import Slider from "react-slick";
import Image from 'next/image'
import pimg1 from '/public/images/partners/1.png'
import pimg2 from '/public/images/partners/2.png'
import pimg3 from '/public/images/partners/3.png'
import pimg4 from '/public/images/partners/4.png'
import pimg5 from '/public/images/partners/5.png'
import SectionTitle from "../SectionTitle";

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg1,
    },
]


const PartnerSection = (props) => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className={`wpo-partners-section ${props.pClass}`}>
            <div className="container">
                <SectionTitle MainTitle={'Everyone we work with'} subTitle={'Our Partners'}/>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="partner-grids partners-slider">
                            <Slider {...settings}>
                                {partners.map((partner, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <Image src={partner.pImg} alt={pitem} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;