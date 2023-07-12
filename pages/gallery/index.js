import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PortfolioSection from '../../components/PortfolioSection';
import PartnerSection from '../../components/PartnerSection';

const GalleryPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Gallery'} pagesub={'Gallery'} />
            <PortfolioSection prClass={'pb-0'}/>
            <PartnerSection pClass={'section-padding'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default GalleryPage;
