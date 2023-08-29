import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/hero';
import About from '../../components/about/about';
import FunFact from '../../components/FunFact/FunFact';
import Testimonial from '../../components/Testimonial/Testimonial';
import BannerSec from '../../components/BannerSec/BannerSec';
import TeamSection from '../../components/TeamSection/TeamSection';
import PartnerSection from '../../components/PartnerSection';
import Product from '../../components/Product';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import VideoSection from '../../components/VideoSection';
import MapSection from '../../components/MapSection/MapSection';
import SectionTitle from '../../components/SectionTitle';
import Services from '../../api/service'
import Link from 'next/link';
import Image from 'next/image'
import { longueurTexte } from "../../utils";
import { Gallery, Item } from 'react-photoswipe-gallery';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import FormSection from '../../components/FormSection/FormSection';

const HomePage = (props) => {

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        props.addToCart(product, qty);
    };

    const addToWishListProduct = (product) => {
        props.addToWishList(product);
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const products = productsArray

    const portraits = [
        {
            img: '/images/portrait/Portrait-2.jpg'
        },
        {
            img: '/images/portrait/Portrait.jpg'
        },
        {
            img: '/images/portrait/Portrait-3.jpg'
        },
        {
            img: '/images/portrait/Portrait-8.jpg'
        },
        {
            img: '/images/portrait/Portrait-11.jpg'
        },
        {
            img: '/images/portrait/Portrait-15.jpg'
        },
        {
            img: '/images/portrait/Portrait-62.jpg'
        },
        {
            img: '/images/portrait/Portrait-18.jpg'
        }
    ]

    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <section className={`wpo-Service-section section-padding ${props.pbClass}`} id="Service">
                <div className="container ff">
                    <SectionTitle MainTitle={'WHAT WE OFFER FOR YOU'} subTitle={'Our Services'} />   
                    <div className="wpo-Service-wrap">
                        <div className="row">
                            {Services.slice(0, 4).map((service, sitem) => (
                                
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                                    <div className="wpo-Service-item">
                                        <div className="wpo-Service-img">
                                            <Image src={service.img} alt="" />
                                        </div>
                                        <div className="wpo-Service-text text-wrap">
                                            <Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{longueurTexte(service.title)}</Link>
                                        </div>
                                    </div>
                                    <div className="wpo-Service-item item-service">
                                        <ul className="list-item">
                                            {service.packages.map((pack) => (
                                                <li style={{fontSize: '14px'}} key={pack.id} className="item">{pack.slug}</li>
                                ))}
                                        </ul>
                                    </div>
                                </div> 
                            ))}

                        </div>
                    
                        <Link style={{backgroundColor:'#b99226'}} onClick={ClickHandler} href="/shop" className="theme-btn">see more services</Link>
                    </div>
                </div>
            </section>
            <FunFact />
            <Testimonial />
            <section className={`wpo-portfolio-section-s2 section-padding ${props.prClass}`} id="gallery">
                <div className="container-fluid">
                    <SectionTitle MainTitle={'enjoy our quality portrait photos'} subTitle={'Our Portraits'}/>
                    <div className="sortable-gallery">
                        <div className="gallery-filters"></div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-grids gallery-container clearfix">
                                    <Gallery >
                                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                                            <Masonry columnsCount={4} gutter="30px">
                                                {portraits.map((image, i) => (
                                                    <div className="grid" key={i}>
                                                        <Item
                                                            original={image.img}
                                                            thumbnail={image.img}
                                                            width="100%"
                                                            height="100%"
                                                        >
                                                            {({ ref, open }) => (
                                                                <img ref={ref} onClick={open} src={image.img} />
                                                            )}
                                                        </Item>
                                                    </div>
                                                ))}
                                            </Masonry>
                                        </ResponsiveMasonry>
                                    </Gallery>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoSection />
            <BannerSec />
            <TeamSection />
            <Product
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            {/* <RsvpSection rClass={'pt-0'}/>
            <PricingSection pvClass={'pt-0'}/>
            <BlogSection /> */}
            <PartnerSection /><br /><br />
            <FormSection />
            <MapSection />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default connect(null, { addToCart, addToWishList })(HomePage);


