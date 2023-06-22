import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2/Navbar2';
import Hero7 from '../../components/hero7';
import VideoSection from '../../components/VideoSection';
import CoupleSection5 from '../../components/CoupleSection5/CoupleSection5';
import StorySection3 from '../../components/StorySection3/StorySection3';
import PortfolioSectionS3 from '../../components/PortfolioSectionS3/PortfolioSectionS3';
import RsvpSectionS5 from '../../components/RsvpSectionS5/RsvpSectionS5';
import PartnerSection from '../../components/PartnerSection';
import EventSection3 from '../../components/EventSection3/EventSection3';
import BlogSection3 from '../../components/BlogSection3/BlogSection3';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import vimg from '/public/images/cta5.jpg'

const HomePage7 = (props) => {

    return (
        <div>
            <Navbar2 />
            <Hero7 />
            <CoupleSection5 />
            <VideoSection vimg={vimg} vClass={'wpo-video-section-s3'}/>
            <StorySection3 stClass={'pb-0'} />
            <PortfolioSectionS3 />
            <RsvpSectionS5 />
            <PartnerSection pClass={'pt-120'}/>
            <EventSection3 />
            <BlogSection3 />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default HomePage7;


