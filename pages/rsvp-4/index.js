import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import RsvpSectionS4 from '../../components/RsvpSectionS4/RsvpSectionS4';

const RsvpPage4 = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'R.S.V.P'} pagesub={'RSVP'} />
            <RsvpSectionS4/>
            <PartnerSection pClass={'pb-120'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default RsvpPage4;
