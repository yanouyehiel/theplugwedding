import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2/Navbar2';
import Hero3 from '../../components/hero3';
import WeddingDate from '../../components/WeddingDate/WeddingDate';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import StorySection from '../../components/StorySection';
import VideoSection2 from '../../components/VideoSection2';
import PortfolioSection from '../../components/PortfolioSection';
import RsvpSectionS3 from '../../components/RsvpSectionS3/RsvpSectionS3';
import PartnerSection from '../../components/PartnerSection';
import EventSection from '../../components/EventSection/EventSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import vimg from '/public/images/cta2.jpg'


const HomePage3 = (props) => {

    return (
        <div>
            <Navbar2 />
            <Hero3 />
            <WeddingDate />
            <CoupleSection />
            <VideoSection2 vimg={vimg}/>
            <StorySection/>
            <PortfolioSection prClass={'pb-0'}/>
            <RsvpSectionS3/>
            <PartnerSection />
            <EventSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default HomePage3;


