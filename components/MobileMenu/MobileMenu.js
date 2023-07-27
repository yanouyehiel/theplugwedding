import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Link  from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
       /*  submenu: [
            {
                id: 11,
                title: 'Main Home',
                link: '/home'
            },
            {
                id: 12,
                title: 'Wedding Planner',
                link: '/home2'
            },
            {
                id: 13,
                title: 'Announcement Home',
                link: '/home3'
            },
            {
                id: 14,
                title: 'Wedding Home',
                link: '/home4'
            },
            {
                id: 15,
                title: 'Asian / Indian Wedding Announcement',
                link: '/home5'
            },
            {
                id: 16,
                title: 'Asian / Indian Wedding Planner',
                link: '/home6'
            },
            {
                id: 17,
                title: 'Muslim Wedding',
                link: '/home7'
            },
            {
                id: 18,
                title: 'Shop Home',
                link: '/home8'
            },
            {
                id: 19,
                title: 'Wedding Invitation',
                link: '/home9'
            },
        ] */
    },

{
    id: 2,
        title: 'About',
        link: '/about',
        /*submenu: [
            {
                id: 21,
                title: 'About',
                link: '/about'
            },
            {
                id: 22,
                title: 'Our story',
                link: '/story'
            },
            {
                id: 23,
                title: 'Accomodation',
                link: '/accomodation'
            },
            {
                id: 24,
                title: 'RSVP',
                link: '/rsvp'
            },
            {
                id: 255,
                title: 'Gallery',
                link: '/gallery'
            },
            {
                id: 266,
                title: 'Planners',
                link: '/planner'
            },
            {
                id: 258,
                title: 'Planner Single',
                link: '/team-single/Robert-William'
            },
            {
                id: 267,
                title: 'Bridesmaid & Groomsman',
                link: '/groom-bride'
            },
            {
                id: 253,
                title: 'Serevice',
                link: '/service'
            },
            {
                id: 26,
                title: 'Serevice S2',
                link: '/service-s2'
            },
            {
                id: 262,
                title: 'Serevice S3',
                link: '/service-s3'
            },
            {
                id: 27,
                title: 'Serevice Single',
                link: '/service/Event-Planning'
            },
            {
                id: 28,
                title: 'Pricing',
                link: '/pricing'
            },
            {
                id: 29,
                title: 'coming',
                link: '/coming'
            },
            {
                id: 221,
                title: '404 Error',
                link: '/404'
            },
            {
                id: 251,
                title: 'Login',
                link: '/login'
            },
            {
                id: 262,
                title: 'Register',
                link: '/register'
            }
        ]*/
    },  
    {
        id: 3,
        title: 'Services',
        link: '/shop',
      /*   submenu: [
            {
                id: 71,
                title: 'Shop',
                link: '/shop',
            },
            {
                id: 75,
                title: 'Shop Single',
                link: '/product-single/Wedding-Cake'
            },
            {
                id: 76,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 77,
                title: 'Checkout',
                link: '/checkout'
            }
            
        ] */
    },
    {
        id: 4,
        title: 'Portfolio',
        link: '/portfolio-masonary',
        submenu: [
            /*{
                id: 41,
                title: 'Portfolio Grid',
                link: '/portfolio-grid'
            },
            {
                id: 42,
                title: 'Portfolio Masonary',
                link: '/portfolio-masonary'
            },
            {
                id: 43,
                title: 'Portfolio Masonary S2',
                link: '/portfolio-masonary-s2'
            },
            {
                id: 45,
                title: 'Portfolio Masonary S3',
                link: '/portfolio-masonary-s3'
            },
            {
                id: 46,
                title: 'Portfolio Masonary S4',
                link: '/portfolio-masonary-s4'
            },
            {
                id: 44,
                title: 'Portfolio Single',
                link: '"/project/Maria-Robin'
            }*/
            {
                id: 41,
                title: 'Portraits',
                link: '/portfolio-masonary-s3'
            },
            {
                id: 42,
                title: 'Weddings',
                link: '/portfolio-masonary'
            },
            {
                id: 43,
                title: 'Events',
                link: '/portfolio-masonary-s2'
            }
        ]
    },


    /*{
        id: 5,
        title: 'Testimonials',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/Dream-Day'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/Dream-Day'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/blog-single-fullwidth/Dream-Day'
            },
        ] 
    },*/
    {
        id: 5,
        title: 'Contact',
        link: '/contact',
    },
    /*{
        id: 5,
        title: 'Blog',
        link: '/blog'
    },
    {
        id: 9,
        title: 'My Profil',
        link: 'profile',
        submenu: [
            {
                id: 91,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 92,
                title: 'Checkout',
                link: '/checkout'
            },
            {
                id: 93,
                title: 'Logout',
                link: '/logout'
            }
        ]
    }*/
    {
        id: 6,
        title: 'Videos',
        link: '/videos'
    }
]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null}  key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                          <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler}
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

                <div className='links'>
                    <hr style={{color:'white'}} />
                    <ul className="list-links">
                        <li className='link'><Link style={{color:'white'}}  target={'_blank'} href="tel:+4915752069252"><i className="fi flaticon-phone-call"></i></Link></li>
                        <li className='link'><Link style={{color:'white'}} href="https://wa.me/4915752069252" target={'_blank'}><i className="fa fa-whatsapp"></i></Link></li>
                        <li className='link'><Link style={{color:'white'}} target={'_blank'} href="mailto:contact@theplug-group.com"><i className="fi flaticon-email icon"></i></Link></li>                 
                    </ul>
                </div>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span> 
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;