import React from "react";
import Services from '../../api/service'
import Link from 'next/link'
import SectionTitle from "../SectionTitle";
import Image from 'next/image'
import { longueurTexte } from "../../utils";


const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const text={
        wordWrap:"break-word"
    }


    return (

        <section className={`wpo-Service-section section-padding ${props.pbClass}`} id="Service">
            <div className="container ff">
                <SectionTitle MainTitle={'WHAT WE OFFER FOR YOU'} subTitle={'Our Services'} />   
                <div className="wpo-Service-wrap">
                    <div className="row">
                        {Services.map((service, sitem) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                                <div className="wpo-Service-item">
                                    <div className="wpo-Service-img">
                                        <Image src={service.img} alt="service" />
                                    </div>
                                    <div className="wpo-Service-text text-wrap">
                                        <Link onClick={ClickHandler} style={{fontSize: '18px'}} href='/service/[slug]' as={`/service/${service.slug}`}>{longueurTexte(service.title)}</Link>
                                    </div>
                                </div>
                                <div className="wpo-Service-item item-service">
                                    <ul className="list-item">
                                        {service.packages.map((pack) => (
                                            <li style={{fontSize: '14px'}} key={pack.id} className="item">{pack.slug}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;