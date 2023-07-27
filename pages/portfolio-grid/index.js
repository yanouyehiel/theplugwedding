import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import PortfolioSection from '../../components/PortfolioSection';
import PartnerSection from '../../components/PartnerSection';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'

const PortfolioGridPage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'Portfolio Grid'} pagesub={'Portfolio'}/> 
            <PortfolioSection pClass={'tb-padding'}/>
            <PartnerSection pClass={'pb-120'}/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default PortfolioGridPage;


