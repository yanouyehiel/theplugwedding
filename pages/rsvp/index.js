import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import RsvpSection from '../../components/RsvpSection/RsvpSection';

const RsvpPage1 = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'R.S.V.P'} pagesub={'RSVP'} />
            <RsvpSection rClass={'pt-120'}/>
            <PartnerSection pClass={'pb-120'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default RsvpPage1;
