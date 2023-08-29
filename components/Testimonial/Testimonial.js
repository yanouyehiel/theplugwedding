import React, { useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image'
import ts1 from '/public/images/testimonial/testimonial1.jpg'
import ts2 from '/public/images/testimonial/testimonial2.jpg'
import ts3 from '/public/images/testimonial/testimonial3.jpg'
import ts4 from '/public/images/testimonial/testimonial4.jpg'
import SectionTitle from '../SectionTitle';
import Link from 'next/link';

const testimonial = [
    {
        id: 1,
        tImg: ts2,
        Des: "Wir haben Stephane für unsere Hochzeit bereits ein Jahr im Voraus gebucht. Am Tag selber war er sehr freundlich und hat alles wichtige festgehalten. Die fertigen Ergebnis lieferte er uns bereits 2 Tage nach der Hochzeit,also unglaublich schnell. Mit den fertigen Bildern sind wir sehr zufrieden und sehr glücklich,dass er uns fotografisch begleitet hat. Vielen Dank dafür ♥️♥️♥️",
        Title: 'Celine & Lucas',
        Date: "08.12.2022",
    },
    {
        id: 2,
        tImg: ts1,
        Des: "Stephane begleitete meinen 40. Geburtstag mit 60 Leuten in einem Restaurant. Die Kontaktaufnahme war schnell, verlässlich und professionell. Stephane ist ein sehr sympathischer Fotograf, der dezent im Hintergrund bleibt und die Gäste super auf Fotos einfängt. In den 3 Stunden hat er knapp 750 Bilder gemacht, die ich bearbeitet bereits nach 7 Tagen erhalten habe. Mit dem Ergebnis bin ich sehr zufrieden und würde Stephane jederzeit wieder buchen",
        Title: 'Christian Pape'
    },
    {
        id: 3,
        tImg: ts3,
        Des: "Stephane accompanied our company summer party and we are completely thrilled with his professional work and his story-telling pictures. We can highly recommend Stephane and will work with him again anytime. During the whole time he was in the background and captured all moments and emotions authentically. Stephane is also a very friendly person. We had a lot of fun with him and enjoyed having him with us on our day. Absolutely recommended!",
        Title: 'Marc Schröter',
        Date: "12.08.2022",
    },
    {
        id: 4,
        tImg: ts4,
        Des: "Certainement la meilleure expérience avec un photographe à ce jour. Stéphane est de loin le plus sympathique et le plus talentueux des photographes. Il s'est assuré que ma famille était à l'aise et qu'elle appréciait l'expérience. Je suis tellement contente d'être tombée sur Stephane(Theplug). Stéphane est très professionnel et la qualité de son travail est à couper le souffle. J'ai été tellement satisfaite de ma séance et des photos finales que je continuerai à faire appel à lui à l'avenir. Je le recommande donc vivement. Merci Stéphane ❤️❤️❤️",
        Title: 'Lucrèce & Audric',
        Date: "12.08.2022",
    }
]

var settings = {
    dots: true,
    arrows: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: '0'
}

const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-testimonial-section section-padding">
            <div className="container">
            <SectionTitle subTitle={'Testimonials'} MainTitle={'what think about our clients'} />
                <div className="wpo-testimonial-wrap">
                    <div className="row align-items-center">
                        <div className="col col-lg-7">
                            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...settings}>
                                {
                                    testimonial.map((tesmnl) => (
                                        <div className="testimonial-img" key={tesmnl.id}>
                                            <Image src={tesmnl.tImg} alt={tesmnl.Title} />
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
                                        testimonial.map((tesmnl) => (
                                            <div className="wpo-testimonial-item" key={tesmnl.id}>
                                                <div className="wpo-testimonial-text">
                                                    <i className="fi flaticon-quotation"></i>
                                                    <p>{tesmnl.Des}</p>
                                                    <div className="wpo-testimonial-text-btm">
                                                        <h3>{tesmnl.Title}</h3>
                                                        {/* <span>Wedding- {tesmnl.Date}</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </Slider>
                                <Link style={{backgroundColor:'#b99226'}} onClick={ClickHandler} href="https://www.google.com/search?q=stephane+kamwa+hochzeitsfotograf+%26+-videograf+(theplug-wedding-events-portrait))&oq=st&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyBggCEEUYOzIGCAMQRRg5MgYIBBBFGDsyBggFEEUYPTIGCAYQRRg8MgYIBxBFGD3SAQgxNzg0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x47bd7af23aaaa0a1:0xabb4dd37dbbf728b,1" target='_blank' className="theme-btn">SEE MORE FEEDBACK</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
