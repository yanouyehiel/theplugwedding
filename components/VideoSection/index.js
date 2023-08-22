import React from 'react'
import Image from 'next/image'
import VideoModal from '../ModalVideo/VideoModal';
import SectionTitle from '../SectionTitle';
import Link from 'next/link';
import videos from "../../api/videos";
import { dateParser } from '../../utils';

const VideoSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    return (
        <section className='wpo-blog-pg-section section-padding'>
            <div className="container">
                    <SectionTitle MainTitle={'Find out how our customers had the best day of their lives'} subTitle={'Weeding Videos'}/>
                    <div className="row">
                        <div className='col col-lg-12 col-12'>
                            <div className="wpo-blog-content">
                                                         
                            {videos.slice(0, 1).map((video) => (                          
                                    <div key={video.id} className='post format-video'>
                                        <div className="entry-media video-holder">
                                            <Image src={video.bgImg} alt={video.persons} />
                                            <VideoModal src={video.link} />
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><i className="fi flaticon-user"></i> By <Link href='/about'>THE PLUG</Link> </li>
                                                <li><i className="fi flaticon-calendar"></i>{dateParser(video.date)}</li>
                                                <li><i className="fi flaticon-location"></i> {video.place}</li>
                                            </ul>
                                        </div>
                                        <div className="entry-details">
                                            <h3><Link href='/videos'>{video.persons}</Link></h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <Link style={{backgroundColor:'#b99256'}} onClick={ClickHandler} href="/videos" className="theme-btn">See more videos...</Link>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default VideoSection;