import React from "react";
import blogs from '../../api/blogs'
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import Image from 'next/image'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection2 = (props) => {
    return (

        <section className={`wpo-blog-section section-padding ${props.bClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Latest News'} MainTitle={'Read Our Wedding News'} />
                <div className="wpo-blog-items">
                    <div className="sortable-gallery">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="wpo-blog-grids gallery-container clearfix">
                                    {blogs.slice(4, 8).map((blog, bl) => (
                                        <div className="grid" key={bl}>
                                            <div className="wpo-blog-item">
                                                <div className="wpo-blog-img">
                                                    <Image src={blog.screens} alt="" />
                                                </div>
                                                <div className="wpo-blog-content">
                                                    <h2><Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                                    <ul>
                                                        <li>{blog.create_at}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection2;