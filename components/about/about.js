import React from 'react'
import abimg from '../../public/images/about/img.jpg'
import abimg1 from '../../public/images/about/2.jpg'
import abimg3 from '../../public/images/about/3.jpg'
import abimg4 from '../../public/images/about/4.jpg'
import mkoff1 from '../../public/images/about/mkoff1.jpg'
import mkoff2 from '../../public/images/about/mkoff2.jpg'
import mkoff3 from '../../public/images/about/mkoff3.jpg'
import mkoff4 from '../../public/images/about/mkoff4.jpg'
import mkoff5 from '../../public/images/about/mkoff5.jpg'
import mkoff6 from '../../public/images/about/mkoff6.jpg'
import mkoff7 from '../../public/images/about/mkoff7.jpg'
import mkoff8 from '../../public/images/about/mkoff8.jpg'
import mkoff9 from '../../public/images/about/mkoff9.jpg'
import mkoff10 from '../../public/images/about/mkoff10.jpg'
import mkoff11 from '../../public/images/about/mkoff11.jpg'
import mkoff12 from '../../public/images/about/mkoff12.jpg'
import mkoff13 from '../../public/images/about/mkoff13.jpg'
import mkoff14 from '../../public/images/about/mkoff14.jpg'
import mkoff15 from '../../public/images/about/mkoff15.jpg' 
import mkoff16 from '../../public/images/about/mkoff16.jpg'
import mkoff17 from '../../public/images/about/mkoff17.jpg'
//import abimg2 from '../../public/images/about/LOGOWEDDING-NOIR.png'
import abimg2 from '../../public/images/THEPLUG-WEGGING_logo.png'
import Link from 'next/link'
import Image from 'next/image'


// Things i added for the slide show
import Slider from "react-slick";

var settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding:'0',
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 1,
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
        hImg: abimg
    },
    {
        hImg: abimg4
    },
    {
        hImg: abimg1
    },
    {
        hImg: abimg3
    }
]



const MkoffArray = [

    {
        hImg: mkoff1
    },
    {
        hImg: mkoff2
    },
    {
        hImg: mkoff3
    },
    {
        hImg: mkoff4
    },
    {
        hImg: mkoff5
    },
    {
        hImg: mkoff6
    },
    {
        hImg: mkoff7
    },
    {
        hImg: mkoff8
    },
    {
        hImg: mkoff9
    },
    {
        hImg: mkoff10
    },
    {
        hImg: mkoff11
    },
    {
        hImg: mkoff12
    },
    {
        hImg: mkoff13
    },
    {
        hImg: mkoff14
    },
    {
        hImg: mkoff15
    },
    {
        hImg: mkoff16
    },
    {
        hImg: mkoff17
    }
]




const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const About = (props) => {
    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-item">
                                <div className="wpo-about-img">
                                    {/* <Image src={abimg} alt="abimg"/> */}
                                    <Slider {...settings}>
                                        {
                                            HeroArray.map((hero, hr) => (
                                                <div className="wpo-hero-item" key={hr}>
                                                    <div className="wpo-hero-img">
                                                        <Image src={hero.hImg} alt="" />
                                                        <div className="wpo-hero-text">
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <h2 style={{color:'#b99256'}} >About Us</h2>
                                
                                <p style={{fontSize:'25px', fontFamily:'Montserrat'}}>Hey liebes Brautpaar😊,<br />
Ich bin Fotograf-Videograf-Drohne Pilot- leidenschaftlicher "Story Teller" mit mehr als 10 Jahren Erfahrung in Hochzeitsfoto- und Videografie in Deutschland und im Ausland. Ich habe Mediengestaltung mit Schwerpunkt Foto-und Videoproduktion studiert und möchte euch dabei helfen, die bildliche Geschichte des schönsten Tages eures Lebens zu schreiben. 
Ich spreche fließend deutsch, französisch und englisch.
Ich würde mich sehr freuen, euch begleiten zu dürfen.

Liebe Grüße

Eur Stephane Kamwa (THEPLUG)

                                </p>
                                <Link style={{backgroundColor:'#b99256'}} onClick={ClickHandler} href="/contact" className="theme-btn">APPOINMENT</Link>
                            </div>
                        </div>
                    </div>
                </div> <br/>
                <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-2">
                            <div className="wpo-about-text">
                                <h2 style={{color:'#b99256'}} >Our Story</h2>
                                <h4 style={{fontFamily:'Montserrat'}}>Our Company Has a Great Mission & Policy</h4>
                                <p className='ff' style={{fontSize:'25px'}} >Nach vielen Jahren, in denen ich mich in der Hochzeitsbranche bewegt habe, wollte ich einen Schritt weitergehen. Grund genug für mich, die besten Hochzeitsdienstleister auf dieser Plattform zu sammeln.
                                </p>
                                <Link style={{backgroundColor:'#b99256'}} onClick={ClickHandler} href="/contact" className="theme-btn">CONTACT US</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-1">
                            <div className="wpo-about-item">
                                <div className="wpo-about-img">
                                    <Image src={abimg2} alt="abimg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br/>
                <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-item">
                                <div className="wpo-about-img">
                                    {/* <Image src={abimg} alt="abimg"/> */}
                                    <Slider {...settings}>
                            {
                                MkoffArray.map((mkoff, r) => (
                                    <div className="wpo-hero-item" key={r}>
                                        <div className="wpo-hero-img">
                                            <Image src={mkoff.hImg} alt="" />
                                            <div className="wpo-hero-text">
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <h2 style={{color:'#b99256'}}>Making off</h2>
                                <h4 style={{fontFamily:'Montserrat'}}>We Are The Best Wedding Planner & Decor.</h4>
                                <p style={{fontSize:'25px',textAlign:'justify', fontFamily:'Montserrat'}}>
                                Wie man auf den Bildern sehen kann, ist ein Tag mit mir ein Kinderspiel. Ich bin ein Mensch mit einer enormen Lebensfreude, der das Leben immer von der positiven Seite nimmt. Diese Lebensfreude kämpfe ich, um sie an alle meine Klienten weiterzugeben. Die Atmosphäre während der Fotoshootings ist sehr cool, wir lachen viel.
                                </p>
                                <Link style={{backgroundColor:'#b99256'}} onClick={ClickHandler} href="/contact" className="theme-btn">APPOINMENT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;