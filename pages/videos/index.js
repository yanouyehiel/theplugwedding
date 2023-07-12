import Navbar from "../../components/Navbar/Navbar";
import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import SectionTitle from "../../components/SectionTitle";
import Image from "next/image";
import VideoModal from "../../components/ModalVideo/VideoModal";
import Link from "next/link";
import videos from "../../api/videos";
import { dateParser } from "../../utils";
import logo from '/public/images/THEPLUG-WEGGING_logo.png'
import Projects from '../../api/projects';
import Footer from "../../components/footer/Footer";
import PartnerSection from "../../components/PartnerSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import MapSection from '../../components/MapSection/MapSection';

const Videos = () => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Our Videos'} pagesub={'Wedding Videos'} />
            <section className="wpo-blog-pg-section section-padding">
                <div className="container">
                    <SectionTitle MainTitle={'Find out how our customers had the best day of their lives'} subTitle={'Weeding Videos'}/>
                    <div className="row">
                        <div className='col col-lg-8 col-12'>
                            <div className="wpo-blog-content">
                                {videos.map((video) => (                          
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
                                            <p>{video.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <div className="blog-sidebar">
                                <div className="widget about-widget">
                                    <div className="img-holder">
                                        <Image src={logo} alt=""/>
                                    </div>
                                    <h4>The PLUG Weeding</h4>
                                    <p>The PLUG Weeding immortalizes the most beautiful day of your life</p>
                                    <div className="social">
                                        <ul className="clearfix">
                                            <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.facebook.com/thepluggroup1"><i className="fi flaticon-facebook-app-symbol"></i></Link></li>
                                            <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.youtube.com/channel/UCjSaZbsMA4qSiqtHQOmrjFA"><i className="fi flaticon-youtube"></i></Link></li>
                                            <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.instagram.com/theplug_wedding/"><i className="fi flaticon-instagram-1"></i></Link></li>
                                            <li><Link onClick={ClickHandler} target={'_blank'} href="https://wa.me/4915752069252"><i className="fa fa-whatsapp"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>              
                
                                <div className="widget wpo-instagram-widget">
                                    <div className="widget-title">
                                        <h3>Last Weddings</h3>
                                    </div>
                                    <ul className="d-flex">
                                        {Projects.slice(0,3).map((project) => (
                                            <li key={project.id}><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}><Image src={project.pSimg} alt="" /></Link></li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="widget tag-widget">
                                    <h3>Themes that fascinate us</h3>
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/shop">photography</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">Planning</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">wedding</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">events</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">creative</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">Solution</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">collection</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">Idea</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">bride & groom</Link></li>
                                    </ul>
                                </div>

                                <div className="widget about-widget">
                                        <h2>How We Can <br/> Help You!</h2>
                                        <p>You can leave us a precise message of what you want by clicking on the button below.</p>
                                        <Link onClick={ClickHandler} href="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PartnerSection pClass={'section-padding'}/> 
            <MapSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
}

export default Videos;