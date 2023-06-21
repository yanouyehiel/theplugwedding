import React from 'react'
import Link from 'next/link'
const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <div className="wpo-site-footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-image">
                            <Link className="logo" href="/"><img src='/images/logo.png' style={{width:'150px', height:'150px'}}
                                            alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="footer-link">
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                               {/*  <li><Link href="/home2">Wedding</Link></li>  */}
                                <li><Link href="/portfolio-masonary">Portfolio</Link></li>
                                <li><Link href="/shop">Services</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                                <li><Link href="/blog">Blog</Link></li> 
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="link-widget">
                            <ul>
                                {/* <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><i className="ti-dribbble"></i></Link></li> */}

                                <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.facebook.com/thepluggroup1"><i className="ti-facebook"></i></Link></li>
                                <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.youtube.com/channel/UCjSaZbsMA4qSiqtHQOmrjFA "><i className="ti-youtube"></i></Link></li>
                                <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.instagram.com/theplug_wedding/"><i className="ti-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p>© Copyright 2023 | <Link href="/">THEPLUG WEDDING</Link> | All right reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;