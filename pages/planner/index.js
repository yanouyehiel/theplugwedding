import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import TeamSection from '../../components/TeamSection/TeamSection';
import PartnerSection from '../../components/PartnerSection';

const PlannerPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Our Planners'} pagesub={'Planner'} />
            <TeamSection/>
            <PartnerSection pClass={'pb-120'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default PlannerPage;
