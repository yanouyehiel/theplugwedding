import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import coupleImg1 from '/public/images/couple/img-3.jpg'
import coupleImg2 from '/public/images/couple/img-4.jpg'
import coupleImg3 from '/public//images/couple/shape.png'

const CoupleSection3 = (props) => {

    return (
        <section className="wpo-couple-section-s3 section-padding" id="couple">
            <div className="container">
                <div className="couple-area clearfix">
                    <div className="row ">
                        <div className="col col-md-4 col-12">
                            <div className="couple-item">
                                <div className="couple-img">
                                    <Image src={coupleImg1} alt="" />
                                </div>
                                <div className="couple-text">
                                    <h3>Srivalli Ahuza</h3>
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
                                <div className="shape floating-item">
                                    <Image src={coupleImg3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4 col-12">
                            <div className="couple-item">
                                <div className="couple-img">
                                    <Image src={coupleImg2} alt="" />
                                </div>
                                <div className="couple-text">
                                    <h3>Bhaban Batra</h3>
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

export default CoupleSection3;