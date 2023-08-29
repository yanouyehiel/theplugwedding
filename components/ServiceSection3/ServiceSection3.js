import React from "react";
import Services from '../../api/service'
import Link from 'next/link'
import Image from 'next/image'
import simg from '/public/images/service/photo.jpg'


const ServiceSection3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (

        <section className={`wpo-Service-section-s3 section-padding  ${props.pbClass}`} id="Service">
            <div className="container">
                <div className="wpo-Service-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="wpo-Service-item">
                                <div className="wpo-Service-img">
                                    <Image src={simg} alt="" />
                                </div>
                                <div className="wpo-Service-text">
                                    <h2>Our Best
                                        Services</h2>
                                </div>
                            </div>
                        </div>
                        {Services.slice(6, 13).map((service, sitem) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                                <div className="wpo-Service-item">
                                    <div className="wpo-Service-img">
                                        <Image src={service.simg1} alt="" />
                                    </div>
                                    <div className="wpo-Service-text">
                                        <Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.title}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection3;