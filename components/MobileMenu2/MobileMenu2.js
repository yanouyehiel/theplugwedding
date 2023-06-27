import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import { Link } from 'react-scroll'
import NavLink from 'next/link'

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
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
        ]
    },



]


const MobileMenu2 = () => {

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
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
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
                                                                <NavLink onClick={ClickHandler}
                                                                    href={submenu.link}>{submenu.title}</NavLink>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <NavLink
                                        href={item.link}>{item.title}</NavLink>
                                }
                            </ListItem>
                        )
                    })}
                    <li><Link activeClass="active" to="couple" spy={true} smooth={true} offset={-100} duration={500} >Couple</Link></li>
                    <li><Link activeClass="active" to="story" spy={true} smooth={true} duration={500} offset={-100} >Story</Link></li>
                    <li><Link activeClass="active" to="gallery" spy={true} smooth={true} duration={500} offset={-100} >Gallery</Link></li>
                    <li><Link activeClass="active" to="rsvp" spy={true} smooth={true} duration={500} offset={-100} >RSVP</Link></li>
                    <li><Link activeClass="active" to="event" spy={true} smooth={true} offset={-80} duration={500} >Events</Link></li>
                </ul>

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

export default MobileMenu2;