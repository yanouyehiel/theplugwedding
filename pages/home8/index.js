import React from 'react';
import Hero8 from '../../components/hero8';
import Navbar from '../../components/Navbar/Navbar';
import Categorys from '../../components/Categorys/Categorys';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import ProductShop from '../../components/ProductShop/ProductShop';
import PartnerSection from '../../components/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";



const ShopHomePage = (props) => {

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
            <Hero8 />
            <Categorys />
            <OfferBanner />
            <ProductShop
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            <PartnerSection pClass={'pb-120'}/>
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default connect(null, { addToCart, addToWishList })(ShopHomePage);


