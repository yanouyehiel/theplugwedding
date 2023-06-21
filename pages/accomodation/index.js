import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import WeddingDate from '../../components/WeddingDate/WeddingDate';
import EventSection from '../../components/EventSection/EventSection';
import VideoSection2 from '../../components/VideoSection2';
import vimg from '/public/images/cta2.jpg'
import PartnerSection from '../../components/PartnerSection';

const AccomodationPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Accomodation'} pagesub={'Accomodation'}/> 
            <WeddingDate dtClass={'pt-120'}/>
            <CoupleSection cClass={'pt-160'}/>
            <VideoSection2 vimg={vimg}/>
            <EventSection/>
            <PartnerSection pClass={'section-padding'} />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AccomodationPage;
