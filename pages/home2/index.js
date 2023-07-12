import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero2 from '../../components/hero2';
import About2 from '../../components/about2/about2';
import ServiceSectionS2 from '../../components/ServiceSection2/ServiceSection2';
import FunFact from '../../components/FunFact/FunFact';
import Testimonial from '../../components/Testimonial/Testimonial';
import VideoSection from '../../components/VideoSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import PartnerSection from '../../components/PartnerSection';
import RsvpSectionS2 from '../../components/RsvpSectionS2/RsvpSectionS2';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import vimg from '/public/images/cta.jpg'

const HomePage2 = (props) => {

    return (
        <div>
            <Navbar />
            <Hero2 />
            <FunFact fClass={'pt-120'}/>
            <ServiceSectionS2/>
            <About2 />
            <Testimonial />
            <VideoSection vimg={vimg}/>
            <ProjectSection prClass={'pt-120'}/>
            <PartnerSection />
            <RsvpSectionS2/>
            <BlogSection bClass={'pt-0'}/>
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default HomePage2;


