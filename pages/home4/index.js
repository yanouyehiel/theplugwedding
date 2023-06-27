import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2/Navbar2';
import Hero4 from '../../components/hero4';
import WeddingCountdown from '../../components/WeddingCountdown/WeddingCountdown';
import CoupleSection2 from '../../components/CoupleSection2/CoupleSection2';
import StorySection from '../../components/StorySection';
import BrideGrooms from '../../components/BrideGrooms';
import PortfolioSection from '../../components/PortfolioSection';
import RsvpSectionS3 from '../../components/RsvpSectionS3/RsvpSectionS3';
import PartnerSection from '../../components/PartnerSection';
import EventSection from '../../components/EventSection/EventSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage4 = (props) => {

    return (
        <div>
            <Navbar2 />
            <Hero4 />
            <CoupleSection2 />
            <WeddingCountdown />
            <StorySection stClass={'wpo-story-section-s2 pb-0'} />
            <PortfolioSection prClass={'pb-0'} />
            <BrideGrooms tClass={'pb-0'}/>
            <RsvpSectionS3 />
            <PartnerSection />
            <EventSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default HomePage4;


