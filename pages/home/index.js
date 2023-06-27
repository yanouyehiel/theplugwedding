import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/hero';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact/FunFact';
import Testimonial from '../../components/Testimonial/Testimonial';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import BannerSec from '../../components/BannerSec/BannerSec';
import TeamSection from '../../components/TeamSection/TeamSection';
import PartnerSection from '../../components/PartnerSection';
import Product from '../../components/Product';
import RsvpSection from '../../components/RsvpSection/RsvpSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import VideoSection from '../../components/VideoSection';
import MapSection from '../../components/MapSection/MapSection';



const HomePage = (props) => {

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        props.addToCart(product, qty);
    };

    const addToWishListProduct = (product) => {
        props.addToWishList(product);
    };


    const products = productsArray

    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <ServiceSection pbClass={'pt-0'}/>
            <FunFact />
            <Testimonial />
            <ProjectSection />
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
            <MapSection />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default connect(null, { addToCart, addToWishList })(HomePage);


