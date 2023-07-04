import React from 'react'
import RSVPFrom2 from '../RSVPFrom2/RSVPFrom2';

const RsvpSectionS5 = (props) => {
    return (
        <section className="wpo-contact-section-s5 section-padding" id="rsvp">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-lg-10 col-md-12 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-section-inner">
                                <div className="wpo-contact-form-area">
                                    <div className="wpo-section-title">
                                        <h4>Are You Attending?</h4>
                                    </div>
                                    <RSVPFrom2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RsvpSectionS5;