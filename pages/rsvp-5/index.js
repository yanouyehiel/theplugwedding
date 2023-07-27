import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import RsvpSectionS5 from '../../components/RsvpSectionS5/RsvpSectionS5';

const RsvpPage5 = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'R.S.V.P'} pagesub={'RSVP'} />
            <PartnerSection pClass={'section-padding'}/>
            <RsvpSectionS5/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default RsvpPage5;
