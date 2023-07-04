import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about/1.png'
import abimg2 from '/public/images/about/2.png'
import Image from 'next/image'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const About2 = (props) => {
    return (
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-item">
                                <div className="wpo-about-img">
                                    <Image src={abimg} alt="" />
                                </div>
                                <div className="wpo-about-img-inner">
                                    <Image src={abimg2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <h2>About Us</h2>
                                <h4>We Are The Best Wedding Planner & Decor.</h4>
                                <p>Convallis gravida odio viverra nisi, aliquam sem netus. Sed at semper at lacus.
                                    Nam integer nunc pellentesque nunc pulvinar donec scelerisque. Malesuada massa
                                    facilisis aliquam nunc ut nisl tincidunt nibh. Massa feugiat vitae habitant
                                    metus viverra. Praesent massa habitant sapien odio ac scelerisque praesent id.
                                </p>
                                <Link onClick={ClickHandler} href="/contact" className="theme-btn">APPOINMENT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;