import React, { useState } from 'react'
import MobileMenu2 from '../MobileMenu2/MobileMenu2';
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import { Link} from 'react-scroll'
import NavLink from 'next/link'


const Header2 = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;

    return (
        <header id="header" className={props.topbarNone}>
            <div className={`wpo-site-header wpo-header-style-2 ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-3 col-3 d-lg-none d-block">
                                <div className="mobail-menu">
                                    <MobileMenu2 />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6 d-lg-block d-none">
                                <div className="social-info">
                                    <ul>
                                        <li><NavLink href="/"><i className="fi flaticon-facebook-app-symbol"></i></NavLink></li>
                                        <li><NavLink href="/"><i className="fi flaticon-twitter"></i></NavLink></li>
                                        <li><NavLink href="/"><i className="fi flaticon-linkedin"></i></NavLink></li>
                                        <li><NavLink href="/"><i className="fi flaticon-instagram-1"></i></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-6 d-lg-none dl-block">
                                <div className="navbar-header">
                                    <NavLink className="navbar-brand" href="/"><img src='/images/logo.svg'
                                        alt="" /></NavLink>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                    <li className="menu-item-has-children">
                                            <NavLink href="/">Home</NavLink>
                                            <ul className="sub-menu">
                                                <li><NavLink onClick={ClickHandler} href="/home">Main Home</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} href="/home2">Wedding Planner</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} href="/home3">Announcement Home</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} href="/home4">Wedding Home</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} href="/home5">Asian / Indian Wedding Announcement</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} href="/home6">Asian / Indian Wedding Planner</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} href="/home7">Muslim Wedding</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} href="/home8">Shop Home</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} href="/home9">Wedding Invitation</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><Link activeClass="active" to="couple" spy={true} smooth={true} offset={-100} duration={500} >Couple</Link></li>
                                        <li><Link activeClass="active" to="story" spy={true} smooth={true} duration={500} offset={-100} >Story</Link></li>
                                        <li><Link className="navbar-brand" to="/"><img src='/images/logo.svg'
                                        alt="" /></Link></li>
                                        <li><Link activeClass="active" to="gallery" spy={true} smooth={true} duration={500} offset={-100} >Gallery</Link></li>
                                        <li><Link activeClass="active" to="rsvp" spy={true} smooth={true} duration={500} offset={-100} >RSVP</Link></li>
                                        <li><Link activeClass="active" to="event" spy={true} smooth={true} offset={-80} duration={500} >Events</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mini-cart">
                                        <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                            {" "}
                                            <i className="fi flaticon-shopping-cart"></i>{" "}
                                            <span className="cart-count">{carts.length}</span>
                                        </button>
                                        <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                            <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><i className="ti-close"></i></button>
                                            <div className="mini-cart-items">
                                                {carts &&
                                                    carts.length > 0 &&
                                                    carts.map((catItem, crt) => (
                                                        <div className="mini-cart-item clearfix" key={crt}>
                                                            <div className="mini-cart-item-image">
                                                                <span>
                                                                    <img src={catItem.proImg} alt="icon" />
                                                                </span>
                                                            </div>
                                                            <div className="mini-cart-item-des">
                                                                <p>{catItem.title} </p>
                                                                <span className="mini-cart-item-price">
                                                                    ${catItem.price} x {" "} {catItem.qty}
                                                                </span>
                                                                <span className="mini-cart-item-quantity">
                                                                    <button
                                                                        onClick={() =>
                                                                            props.removeFromCart(catItem.id)
                                                                        }
                                                                        className="btn btn-sm btn-danger"
                                                                    >
                                                                        <i className="ti-close"></i>
                                                                    </button>{" "}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                            <div className="mini-cart-action clearfix">
                                                <span className="mini-checkout-price">Subtotal: <span> ${totalPrice(carts)}</span></span>
                                                <div className="mini-btn">
                                                    <NavLink onClick={ClickHandler} href="/checkout" className="view-cart-btn s1">Checkout</NavLink>
                                                    <NavLink onClick={ClickHandler} href="/cart" className="view-cart-btn">View Cart</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};
export default connect(mapStateToProps, { removeFromCart })(Header2);