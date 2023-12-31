import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import PortfolioSectionS3 from '../../components/PortfolioSectionS3/PortfolioSectionS3';
import MapSection from '../../components/MapSection/MapSection';

const PortfolioMasonaryPageS2 =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Our Events'} pagesub={'Events'}/> 
            <PortfolioSectionS3/>
            <PartnerSection pClass={'pb-120'}/>
            <MapSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PortfolioMasonaryPageS2;
