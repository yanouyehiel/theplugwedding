import React from 'react'
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/event/Firma-Unternehmen-Event-Party-Birthday-Geburtstag-Bild-2.jpg'
import sImg2 from '/public/images/event/Firma-Unternehmen-Event-Party-Birthday-Geburtstag-Bild-3.jpg'
import sImg3 from '/public/images/event/Firma-Unternehmen-Event-Party-Birthday-Geburtstag-Bild-124.jpg'
import LocationMap from './Modal'
import Image from 'next/image'


const Events = [
    {
        Simg: sImg1,
        title: 'The Reception',
        li1: 'Monday, 12 Apr. 2022 1:00 PM – 2:30 PM',
        li2: '4517 Washington Ave. Manchester, Kentucky 39495',
        li3: '+1 234-567-8910',
    },
    {
        Simg: sImg2,
        title: 'The Ceremony',
        li1: 'Monday, 12 Apr. 2022 1:00 PM – 2:30 PM',
        li2: '4517 Washington Ave. Manchester, Kentucky 39495',
        li3: '+1 234-567-8910',
    },
    {
        Simg: sImg3,
        title: 'Wedding Party',
        li1: 'Monday, 12 Apr. 2022 1:00 PM – 2:30 PM',
        li2: '4517 Washington Ave. Manchester, Kentucky 39495',
        li3: '+1 234-567-8910',
    },

]

const EventSection = (props) => {
    return (
        <section className="wpo-event-section section-padding pb-0" id="event">
            <div className="container">
                <SectionTitle subTitle={'When & Where'} MainTitle={'When & Where'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-img">
                                        <Image src={event.Simg} alt="" />
                                        <div className="title"><h2>{event.title}</h2></div>
                                    </div>
                                    <div className="wpo-event-text">
                                        <ul>
                                            <li>{event.li1}</li>
                                            <li>{event.li2}</li>
                                            <li>{event.li3}</li>
                                            <li><LocationMap /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSection;