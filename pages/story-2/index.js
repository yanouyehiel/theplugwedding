import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import StorySection from '../../components/StorySection';

const StoryPage2 = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Our Story'} pagesub={'Story'} />
            <StorySection stClass={'wpo-story-section-s2'}/>
            <PartnerSection pClass={'section-padding pt-0'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default StoryPage2;
