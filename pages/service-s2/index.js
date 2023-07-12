import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ServiceSectionS2 from '../../components/ServiceSection2/ServiceSection2';
import PartnerSection from '../../components/PartnerSection';


const ServicePageS2 =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <ServiceSectionS2/> 
            <PartnerSection pClass={'pb-120'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default ServicePageS2;
