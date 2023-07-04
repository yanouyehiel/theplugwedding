import React from 'react'
import Image from 'next/image'
import cimg from '/public/images/contact/img-1.jpg'
import cimg2 from '/public/images/contact/img-2.jpg'
import shape1 from '/public/images/contact/1.png'
import shape2 from '/public/images/contact/2.png'
import RSVPFrom from '../RSVPFrom/RSVPFrom'


const RsvpSection = (props) => {
    return (
        <section className={`wpo-contact-section section-padding ${props.rClass}`}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xl-4 col-lg-3 col-md-3 col-12">
                        <div className="contact-img">
                            <Image src={cimg} alt=""/>
                        </div>
                    </div>
                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title">
                                    <h4>Lets Meet</h4>
                                    <h2>Make An Inquiry</h2>
                                </div>
                                <RSVPFrom/>
                            </div>
                            <div className="vector-1">
                                <Image src={shape1} alt=""/>
                            </div>
                            <div className="vector-2">
                                <Image src={shape2} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col col-xl-4 col-lg-3 col-md-3 col-12">
                        <div className="contact-img">
                            <Image src={cimg2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RsvpSection;