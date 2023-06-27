import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import StorySection from '../../components/StorySection';

const StoryPage1 = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Our Story'} pagesub={'Story'} />
            <StorySection/>
            <PartnerSection pClass={'section-padding'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default StoryPage1;
