import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Projects from '../../api/projects'
import Footer from '../../components/footer/Footer';
import Image from 'next/image'
import pImg1 from '/public/images/portfolio-single/1.jpg'
import pImg2 from '/public/images/portfolio-single/2.jpg'
import pImg3 from '/public/images/portfolio-single/3.jpg'



const ProjectSinglePage = (props) => {
    const router = useRouter()

    const projectDetails = Projects.find(item => item.slug === router.query.slug)


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={projectDetails?.title} pagesub={projectDetails?.title}/>
            <section className="wpo-portfolio-single-section section-padding">
                <div className="container">
                    <div className="portfolio-single-wrap">
                        <div className="row">
                            <div className="col-lg-7 col-12">
                                <div className="portfolio-single-img-wrap">
                                    <div className="portfolio-single-img">
                                        <Image src={projectDetails?.pSimg} alt=""/>
                                    </div>
                                    <div className="portfolio-single-img">
                                        <Image src={pImg1} alt=""/>
                                    </div>
                                    <div className="portfolio-single-img">
                                        <Image src={pImg2} alt=""/>
                                    </div>
                                    <div className="portfolio-single-img">
                                        <Image src={pImg3} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-12">
                                <div className="portfolio-single-sitebar">
                                    <div className="portfolio-single-text">
                                        <h2>Marriage For Life</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam.</p>
                                        <div className="wpo-portfolio-single-content-des">
                                            <ul>
                                                <li>Location :<span>3724 Linda Street,  London</span></li>
                                                <li>Client :<span>{projectDetails?.title}</span></li>
                                                <li>Photographer :<span>Harry Johnson</span></li>
                                                <li>Project Type :<span>Photography</span></li>
                                                <li>Duration : <span>6 Month</span></li>
                                                <li>Tag :<span>Wedding, Planner, Bride, GItem</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar/>
        </Fragment>
    );
};
export default ProjectSinglePage;
