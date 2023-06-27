import React from 'react'
import cimg from '/public/images/contact/img-3.jpg'
import shape1 from '/public/images/contact/1.png'
import shape2 from '/public/images/contact/2.png'
import RSVPFrom from '../RSVPFrom/RSVPFrom'
import Image from 'next/image'


const RsvpSectionS2 = (props) => {
    return (
        <section className="wpo-contact-section-s2 section-padding">
            <div className="contact-bg"><Image src={cimg} alt=""/></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-xl-12 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title">
                                    <h4>Lets Meet</h4>
                                    <h2>Make An Inquiry</h2>
                                </div>
                                <RSVPFrom />
                            </div>
                            <div className="vector-1">
                                <Image src={shape1} alt="" />
                            </div>
                            <div className="vector-2">
                                <Image src={shape2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RsvpSectionS2;