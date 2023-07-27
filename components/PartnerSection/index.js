import React from "react";
import Slider from "react-slick";
import Image from 'next/image'
import pimg1 from '/public/images/partners/fotografensuche-logo.png'
import pimg2 from '/public/images/partners/logo-hochzeits-fotograf.png'
import pimg3 from '/public/images/partners/logo-hochzeitsfotograf.png'
import pimg4 from '/public/images/partners/maltLogo.webp'
import pimg5 from '/public/images/partners/Mywed.svg'
import pimg6 from '/public/images/partners/prolumbus-logo.svg'
import pimg7 from '/public/images/partners/Proven-Expert-Logo.webp'
import pimg8 from '/public/images/partners/TraumFotograf.png'
import pimg9 from '/public/images/partners/trustlocal_logo.svg'
import pimg10 from '/public/images/partners/zankyou-logo.svg'
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
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg8,
    },
    {
        pImg: pimg9,
    },
    {
        pImg: pimg10,
    }
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