import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';

const PortfolioMasonaryPageS4 =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Portfolio Masonry'} pagesub={'Portfolio'}/> 
            <ProjectSectionS2 prClass={'pt-120'}/>
            <PartnerSection pClass={'pb-120'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PortfolioMasonaryPageS4;
