import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Services from '../../api/service'
import ServiceSidebar from './single/sidebar';
import Benefits from './single/benefits';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Image from 'next/image'
import Link from 'next/link';


const SeviceSinglePage = (props) => {
    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)
    console.log(serviceDetails);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={serviceDetails?.title} pagesub={serviceDetails?.title} />
            <div className="wpo-service-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-minimal-wrap">
                                <div className="wpo-minimal-img">
                                    <Image src={serviceDetails?.ssImg} alt="" />
                                </div>
                            </div>
                            <div className="wpo-p-details-section">
                                <h5>{serviceDetails.title}</h5>
                                
                                <p key={serviceDetails.id}>
                                    {serviceDetails.packages.map(pack => (
                                        <li key={pack.id}>{pack.slug}</li>
                                    ))}
                                </p>
                                <br />
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <Image src={serviceDetails?.sinnerImg1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <Image src={serviceDetails?.sinnerImg2} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <p>The majority have suffered alteration in some form or randomised words which don't
                                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be sure there isn't anything embarrassing hidden.</p>

                                <div className="process-wrap">
                                    <h5>Our work process</h5>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="process-item">
                                                <div className="process-icon">
                                                    <i className="fi flaticon-dove"></i>
                                                </div>
                                                <div className="process-text">
                                                    <h3>Research and analytics</h3>
                                                    <p>If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="process-item">
                                                <div className="process-icon">
                                                    <i className="fi flaticon-edit"></i>
                                                </div>
                                                <div className="process-text">
                                                    <h3>Design and Idea</h3>
                                                    <p>If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="process-item">
                                                <div className="process-icon">
                                                    <i className="fi flaticon-wedding"></i>
                                                </div>
                                                <div className="process-text">
                                                    <h3>All Event Manage</h3>
                                                    <p>If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Benefits />
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};
export default SeviceSinglePage;
