import React, { useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image'
import ts1 from '/public/images/testimonial/img-1.jpg'
import ts2 from '/public/images/testimonial/img-2.jpg'
import ts3 from '/public/images/testimonial/img-3.jpg'
import SectionTitle from '../SectionTitle';

const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "Varius aenean fringilla consectetur adipiscing felis, lectus. Id eros, porta quam quis proin non vulputate lacinia imperdiet. Mus ut amet tortor iEros, sed at semper sed in tempor ultrices sed. Id sem nulla quisque vel duiscoue necrd.",
        Title: 'Marlin & Williamson',
        Date: "23.05.2022",
    },
    {
        id: '01',
        tImg: ts2,
        Des: "Varius aenean fringilla consectetur adipiscing felis, lectus. Id eros, porta quam quis proin non vulputate lacinia imperdiet. Mus ut amet tortor iEros, sed at semper sed in tempor ultrices sed. Id sem nulla quisque vel duiscoue necrd.",
        Title: 'Rihanna & William',
        Date: "08.12.2022",
    },
    {
        id: '01',
        tImg: ts3,
        Des: "Varius aenean fringilla consectetur adipiscing felis, lectus. Id eros, porta quam quis proin non vulputate lacinia imperdiet. Mus ut amet tortor iEros, sed at semper sed in tempor ultrices sed. Id sem nulla quisque vel duiscoue necrd.",
        Title: 'Sarah & Daniel',
        Date: "12.08.2022",
    }
]


const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="wpo-testimonial-section section-padding">
            <div className="container">
            <SectionTitle subTitle={'Testimonials'} MainTitle={'what think about our clients'} />
                <div className="wpo-testimonial-wrap">
                    <div className="row align-items-center">
                        <div className="col col-lg-7">
                            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={true} arrows={false}>
                                {
                                    testimonial.map((tesmnl, tsm) => (
                                        <div className="testimonial-img" key={tsm}>
                                            <Image src={tesmnl.tImg} alt="" />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                        <div className="col col-lg-5">
                            <div className="wpo-testimonial-items">
                                <Slider
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={1}
                                    fade={true}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    {
                                        testimonial.map((tesmnl, tsm) => (
                                            <div className="wpo-testimonial-item" key={tsm}>
                                                <div className="wpo-testimonial-text">
                                                    <i className="fi flaticon-quotation"></i>
                                                    <p>{tesmnl.Des}</p>
                                                    <div className="wpo-testimonial-text-btm">
                                                        <h3>{tesmnl.Title}</h3>
                                                        <span>Wedding- {tesmnl.Date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;