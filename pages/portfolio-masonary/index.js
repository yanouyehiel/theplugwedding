import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PortfolioSectionS2 from '../../components/PortfolioSectionS2/PortfolioSectionS2';
import PartnerSection from '../../components/PartnerSection';

const PortfolioMasonaryPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Our Portfolio'} pagesub={'Portfolio'}/> 
            <PortfolioSectionS2/>
            <PartnerSection pClass={'pb-120'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PortfolioMasonaryPage;
