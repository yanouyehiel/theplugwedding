import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import MapSection from '../../components/MapSection/MapSection';

const PortfolioMasonaryPageS3 =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Portfolio Masonry'} pagesub={'Portrait'}/> 
            <ProjectSection prClass={'pt-120'}/>
            <PartnerSection pClass={'pb-120'}/>
            <MapSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PortfolioMasonaryPageS3;
