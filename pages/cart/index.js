import React, { Fragment } from 'react';
import { Button, Grid } from "@mui/material";
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { connect } from "react-redux";
import {totalPrice} from "../../utils";
import Link from "next/link";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/actions/action";
import Scrollbar from '../../components/scrollbar/scrollbar';

const submitHandler = (e) => {
    e.preventDefault()
}


const CartPage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
      };
    
      const { carts } = props;

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle='Cart' pagesub="Cart" />
            <div className="cart-area section-padding">
                <div className="container">
                    <div className="form">
                        <div className="cart-wrapper">
                            <div className="row">
                                <div className="col-12">
                                    <form action="cart">
                                        <table className="table-responsive cart-wrap">
                                            <thead>
                                                <tr>
                                                    <th className="images images-b">Image</th>
                                                    <th className="product-2">Product Name</th>
                                                    <th className="pr">Quantity</th>
                                                    <th className="ptice">Price</th>
                                                    <th className="stock">Total Price</th>
                                                    <th className="remove remove-b">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {carts &&
                                                    carts.length > 0 &&
                                                    carts.map((catItem, crt) => (
                                                        <tr key={crt}>
                                                            <td className="images">
                                                                <img src={catItem.proImg} alt="" />
                                                            </td>
                                                            <td className="product">
                                                                <ul>
                                                                    <li className="first-cart">
                                                                        {catItem.title}
                                                                    </li>
                                                                    <li>Brand : {catItem.brand}</li>
                                                                    <li>Size : {catItem.size}</li>
                                                                </ul>
                                                            </td>
                                                            <td className="stock">
                                                                <div className="pro-single-btn">
                                                                    <Grid className="quantity cart-plus-minus">
                                                                        <Button
                                                                            className="dec qtybutton"
                                                                            onClick={() =>
                                                                                props.decrementQuantity(catItem.id)
                                                                            }
                                                                        >
                                                                            -
                                                                        </Button>
                                                                        <input value={catItem.qty} type="text" />
                                                                        <Button
                                                                            className="inc qtybutton"
                                                                            onClick={() =>
                                                                                props.incrementQuantity(catItem.id)
                                                                            }
                                                                        >
                                                                            +
                                                                        </Button>
                                                                    </Grid>
                                                                </div>
                                                            </td>
                                                            <td className="ptice">${catItem.qty * catItem.price}</td>
                                                            <td className="stock">${catItem.qty * catItem.price}</td>
                                                            <td className="action">
                                                                <ul>
                                                                    <li
                                                                        className="w-btn"
                                                                        onClick={() =>
                                                                            props.removeFromCart(catItem.id)
                                                                        }
                                                                    >
                                                                        <i className="fi ti-trash"></i>
                                                                    </li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </table>
                                    </form>
                                    <div className="submit-btn-area">
                                        <ul>
                                            <li>
                                                <Link onClick={ClickHandler} href="/shop" className="theme-btn-s3">
                                                    Continue Shopping{" "}
                                                </Link>
                                            </li>
                                            <li>
                                                <button type="submit">Update Cart</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cart-product-list">
                                        <ul>
                                            <li>
                                                Total product<span>( {carts.length} )</span>
                                            </li>
                                            <li>
                                                Sub Price<span>${totalPrice(carts)}</span>
                                            </li>
                                            <li>
                                                Vat<span>$0</span>
                                            </li>
                                            <li>
                                                Eco Tax<span>$0</span>
                                            </li>
                                            <li>
                                                Delivery Charge<span>$0</span>
                                            </li>
                                            <li className="cart-b">
                                                Total Price<span>${totalPrice(carts)}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="submit-btn-area">
                                        <ul>
                                            <li>
                                                <Link onClick={ClickHandler} href="/checkout" className="theme-btn-s3">
                                                    Proceed to Checkout{" "}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar/>
        </Fragment>
    );
};


const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};
export default connect(mapStateToProps, {
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
})(CartPage);

