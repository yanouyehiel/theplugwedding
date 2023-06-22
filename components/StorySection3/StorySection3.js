import React from 'react'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'
import sImg1 from '/public/images/story/8.jpg'
import sImg2 from '/public/images/story/9.jpg'
import sImg3 from '/public/images/story/11.jpg'
import sImg4 from '/public/images/story/10.jpg'
import sImg5 from '/public/images/story/12.jpg'
import sImg6 from '/public/images/story/13.jpg'



const Storys = [
    {
        sImg: sImg1,
        ssImg: sImg2,
        title: 'First Time We Meet',
        date: '12 Feb 2016',
        description: 'Lorem ipsum dolor sit amet, constetur adicng elit. Ultricies nulla mi tempus mcorper for praesent. Ultricies interdum volutpat morbi nam ornare neque elit leo, diam. Malesuada enim ac amurna tempor vel duis.',
    },
    {
        sImg: sImg3,
        ssImg: sImg4,
        title: 'Family Final Meeting',
        date: '23 Apr 2016',
        description: 'Lorem ipsum dolor sit amet, constetur adicng elit. Ultricies nulla mi tempus mcorper for praesent. Ultricies interdum volutpat morbi nam ornare neque elit leo, diam. Malesuada enim ac amurna tempor vel duis.',
    },
    {
        sImg: sImg5,
        ssImg: sImg6,
        title: 'Our Engagement Day',
        date: '10 Mar 2016',
        description: 'Lorem ipsum dolor sit amet, constetur adicng elit. Ultricies nulla mi tempus mcorper for praesent. Ultricies interdum volutpat morbi nam ornare neque elit leo, diam. Malesuada enim ac amurna tempor vel duis.',
    }

]


const StorySection3 = (props) => {
    return (
        <section className={`wpo-story-section-s4 section-padding ${props.stClass}`} id="story">
            <div className="container">
                <SectionTitle subTitle={'Our Story'} MainTitle={'Our Sweet love story'} />
                <div className="wpo-story-wrap">
                    {
                        Storys.map((story, st) => (
                            <div className="wpo-story-item" key={st}>
                                <div className="wpo-story-content-wrap">
                                    <div className="wpo-story-content-img">
                                        <Image src={story.sImg} alt="" />
                                    </div>
                                    <div className="wpo-story-content">
                                        <div className="wpo-story-content-inner">
                                            <h2>{story.title}</h2>
                                            <span>{story.date}</span>
                                            <p>{story.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-story-img-wrap">
                                    <div className="wpo-story-img">
                                        <Image src={story.ssImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
        </section>
    )
}

export default StorySection3;