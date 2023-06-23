import React from 'react'
import Services from '../../../api/service';
import Link from 'next/link'
import Image from 'next/image'
import ins1 from '/public/images/instragram/1.jpg'
import ins2 from '/public/images/instragram/2.jpg'
import ins3 from '/public/images/instragram/3.jpg'
import ins4 from '/public/images/instragram/4.jpg'
import ins5 from '/public/images/instragram/5.jpg'
import ins6 from '/public/images/instragram/6.jpg'

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="blog-sidebar">
                {/* <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div> */}
                <div className="widget category-widget">
                    <h3>Services</h3>
                    <ul>
                        {Services.slice(0, 6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Instagram</h3>
                    </div>
                    <ul className="d-flex">
                        <li><Image src={ins1} alt="" /></li>
                        <li><Image src={ins2} alt="" /></li>
                        <li><Image src={ins3} alt="" /></li>
                        <li><Image src={ins4} alt="" /></li>
                        <li><Image src={ins5} alt="" /></li>
                        <li><Image src={ins6} alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ServiceSidebar;