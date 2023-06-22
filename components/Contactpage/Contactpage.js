import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import Link from 'next/link';

const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
            Um dieses Ziel zu erreichen, werden wir ein erstes Kennenlern- Gespräch führen, danach werde ich euch ein auf euren Wünschen, Anregungen und Budget zugeschnittenes Angebot machen.
Ich freue mich über die Ehre und das Vertrauen, das ihr mir entgegenbringt in die Intimität eures großen Tages eintauchen und die wichtigen und emotionalen Momente eurer Hochzeit festhalten zu dürfen.
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-maps-and-flags"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>We are in several countries such as Germany, Cameroon, Luxembourg, France, Belgium, Austria, Switzerland, Denmark, Italy and Spain</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>You can contact us to let us know what you want at this address</p>
                                            <p><Link className='item-menu text-link' href='mailto:contact@theplug-group.com'>contact@theplug-group.com</Link></p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>CMR: <Link className='item-menu text-link' href='tel:+237678129832'>+237 678 129 832</Link></p>
                                            <p>DE: <Link className='item-menu text-link' href='tel:+4915752069252'>+49 1575 2069252</Link></p>
                                            <p>CMR: <Link className='item-menu text-link' href='tel:+237673321992'>+237 673 321 992</Link></p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>It is a long established fact that a reader will be distracted
                                content of a page when looking.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>
                </div>
            </section>
        </section>
     )
        
}

export default Contactpage;
