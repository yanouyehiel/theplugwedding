import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import coupleImg1 from '/public/images/couple/img-5.jpg'
import coupleImg2 from '/public/images/couple/img-6.jpg'
import coupleImg3 from '/public/images/couple/img-7.jpg'
import coupleImg4 from '/public//images/couple/shape.png'

const CoupleSection5 = (props) => {

    return (
        <section className="wpo-couple-section-s4 section-padding" id="couple">
            <div className="container">
                <div className="couple-area clearfix">
                    <div className="row ">
                        <div className="col col-md-4 col-12">
                            <div className="couple-item">
                                <div className="couple-img">
                                    <Image src={coupleImg1} alt=""/>
                                </div>
                                <div className="couple-text">
                                    <h3>Muhammad Zaki</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae
                                        nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae, sagittis
                                        blandit.</p>
                                    <div className="social">
                                        <ul>
                                            <li><Link href="/home3"><i className="ti-facebook"></i></Link></li>
                                            <li><Link href="/home3"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link href="/home3"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4 col-12">
                            <div className="middle-couple-shape">
                                <div className="middle-img">
                                    <Image src={coupleImg2} alt=""/>
                                </div>
                                <div className="shape">
                                    <Image src={coupleImg4} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4 col-12">
                            <div className="couple-item">
                                <div className="couple-img">
                                    <Image src={coupleImg3} alt=""/>
                                </div>
                                <div className="couple-text">
                                    <h3>Amatullah Sarah</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae
                                        nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae, sagittis
                                        blandit.</p>
                                    <div className="social">
                                        <ul>
                                            <li><Link href="/home3"><i className="ti-facebook"></i></Link></li>
                                            <li><Link href="/home3"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link href="/home3"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoupleSection5;