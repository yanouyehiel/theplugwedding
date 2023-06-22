import React from 'react'
import RSVPFrom2 from '../RSVPFrom2/RSVPFrom2';
import Link from 'next/link'
import Image from 'next/image'
import cimg from '/public/images/contact/img-4.jpg'

const RsvpSectionS3 = (props) => {
    return (
        <section className="wpo-contact-section-s3 section-padding" id="rsvp">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-xl-4 col-lg-6 col-md-12 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title">
                                    <h4>Are You Attending?</h4>
                                </div>
                                <RSVPFrom2 />
                            </div>
                        </div>
                    </div>
                    <div className="col col-xl-8 col-lg-6 col-md-12 col-12">
                        <div className="contact-img">
                            <Image src={cimg} alt="" />
                            <div className="rsvp-info">
                                <div className="info-left">
                                    <h2>We Are Getting Married!</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, egestas luctus
                                        hendrerit maecenas.</p>
                                </div>
                                <div className="btn"><Link className="theme-btn" href="/rsvp">Discover More</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RsvpSectionS3;