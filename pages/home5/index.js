import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2/Navbar2';
import Hero5 from '../../components/hero5';
import VideoSection from '../../components/VideoSection';
import WeddingCountdown from '../../components/WeddingCountdown/WeddingCountdown';
import CoupleSection3 from '../../components/CoupleSection3/CoupleSection3';
import StorySection2 from '../../components/StorySection2/StorySection2';
import BrideGrooms from '../../components/BrideGrooms';
import PortfolioSectionS2 from '../../components/PortfolioSectionS2/PortfolioSectionS2';
import RsvpSectionS4 from '../../components/RsvpSectionS4/RsvpSectionS4';
import PartnerSection from '../../components/PartnerSection';
import EventSection2 from '../../components/EventSection2/EventSection2';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import vimg from '/public/images/cta3.jpg'

const HomePage5 = (props) => {

    return (
        <div>
            <Navbar2 />
            <Hero5 />
            <CoupleSection3 />
            <VideoSection vimg={vimg} vClass={'wpo-video-section-s3'}/>
            <WeddingCountdown />
            <StorySection2 stClass={'pb-0'} />
            <PortfolioSectionS2 prClass={'pb-0'} />
            <BrideGrooms tClass={'pb-0'}/>
            <RsvpSectionS4 />
            <PartnerSection />
            <EventSection2 />
            <BlogSection2 />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default HomePage5;


