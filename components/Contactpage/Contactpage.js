import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import Link from 'next/link';
import SectionTitle from '../SectionTitle';

const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <SectionTitle MainTitle={'You have several ways to contact us'} subTitle={'Our Contacts'}/>
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
                                            <p>We are in several countries such as Germany, Luxembourg, France, Belgium, Austria, Switzerland, Denmark, Italy, Spain, Cameroon, Gabon and Ivory Coast</p>
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
                                            <p>DE: <Link className='item-menu text-link' href='tel:+4915752069252'>+49 1575 2069252</Link></p>
                                            <p>CMR: <Link className='item-menu text-link' href='tel:+237673321992'>+237 673 321 992</Link></p>
                                            <p>CMR: <Link className='item-menu text-link' href='tel:+237678129832'>+237 678 129 832</Link></p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>In order to achieve this goal, we will have an initial meeting to get to know each other, after which I will make you an offer tailored to your wishes, suggestions and budget. I appreciate the honor and trust you have in me to immerse yourself in the intimacy of your big day and capture the important and emotional moments of your wedding.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map div-map">
                    <img className='img-map' src="/images/mapping card_page.jpg" />
                </div>
            </section>
        </section>
     )
        
}

export default Contactpage;
