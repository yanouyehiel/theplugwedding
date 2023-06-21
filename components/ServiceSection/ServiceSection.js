import React from "react";
import Services from '../../api/service'
import Link from 'next/link'
import SectionTitle from "../SectionTitle";
import Image from 'next/image'


const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const text={
        wordWrap:"break-word"
    }

    const longueurTexte = (sentence) => {
        if (sentence.length <= 11) {
            return sentence;
        } else {
            return sentence.substring(0, 11) + '...';
        }
        
    }


    return (

        <section className={`wpo-Service-section section-padding ${props.pbClass}`} id="Service">
            <div className="container ff">
                <SectionTitle MainTitle={'WHAT WE OFFER FOR YOU'} subTitle={'Our Services'} />   
                <div className="wpo-Service-wrap">
                    <div className="row">
                        {Services.slice(0,4).map((service, sitem) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                                <div className="wpo-Service-item">
                                    <div className="wpo-Service-img">
                                        <Image src={service.simg1} alt="" />
                                    </div>
                                    <div className="wpo-Service-text text-wrap">
                                        <Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{longueurTexte(service.title)}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                  {/*   <div class="container" >

                   <p className="text-center"> In meinem Package habt ihr folgende Wahlmöglichkeiten:</p><br/><br/>

                        <div >
                               <div class="row justify-content-around">
                                            <div class="col-4">
                                            Getting Ready-Reportage und Brautabholung
                                            </div>
                                            <div class="col-4">
                                            Brautpaarshootings vor und/oder nach der Hochzeit, Standesamtliche und/oder         
                                             kirchliche Trauung
                                            </div>
                                            <div class="col-4">
                                            Getting Ready-Reportage, Brautabholung, Brautpaarshootings vor und/oder nach der 
                                             Hochzeit, Standesamtliche und/oder kirchliche Trauung
                                            </div>
                                </div>

                        </div>
                                                            <br/><br/><br/>
                        <div >
                                <div class="row justify-content-around">
                                            <div class="col-4">
                                            Standesamtliche und/oder kirchliche Trauung Reportage mit Brautpaarshooting        
                                             und     Gruppenfotos
                                            </div>
                                            <div class="col-4">
                                            Standesamtliche und/oder kirchliche Trauung Reportage mit Brautpaarshooting, 
                                             Gruppenfotos, Sektempfang und/oder Hochzeitsfeier
                                            </div>
                                            <div class="col-4">
                                            Ganztag oder teil-zeitliche Begleitung mit der Kamera und/oder Video
                                            </div>
                                </div>

                        </div>

                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;