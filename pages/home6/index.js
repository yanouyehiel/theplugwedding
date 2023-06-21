import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero6 from '../../components/hero6';
import ServiceSection3 from '../../components/ServiceSection3/ServiceSection3';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import PartnerSection from '../../components/PartnerSection';
import RsvpSectionS4 from '../../components/RsvpSectionS4/RsvpSectionS4';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import VideoSection2 from '../../components/VideoSection2';
import vimg from '/public/images/cta4.jpg'



const HomePage6 = (props) => {



    return (
        <div>
            <Navbar  hclass={'wpo-header-style-4'}/>
            <Hero6 />
            <ServiceSection3 />
            <VideoSection2 vimg={vimg} vClass={'wpo-video-section-s2 pt-0'}/>
            <ProjectSectionS2 prClass={'pt-120'}/>
            <RsvpSectionS4 rClass={'pt-0'}/>
            <Testimonial2 tClass={'pt-0'} />
            <PartnerSection />
            <BlogSection2 />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default HomePage6;


