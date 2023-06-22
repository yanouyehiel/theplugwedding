import React from 'react';
import Link from 'next/link'
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'
import VideoModal from '../ModalVideo/VideoModal'
import Image from 'next/image'
import blogs from '../../api/blogs'


const ClickHandler = () =>{
    window.scrollTo(10, 0);
 }

const BlogList = (props) => {
    return(
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            {blogs.slice(0, 3).map((blog, bitem) => (
                                <div className={`post  ${blog.blClass}`}key={bitem}>
                                    <div className="entry-media video-holder">
                                        <Image src={blog.blogSingleImg} alt=""/>
                                        <VideoModal/>
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-user"></i> By <Link href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>{blog.authorTitle}</Link> </li>
                                            <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments {blog.comment} </li>
                                            <li><i className="fi flaticon-calendar"></i> {blog.create_at}</li>
                                        </ul>
                                    </div>
                                    <div className="entry-details">
                                        <h3><Link href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                        <p>Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.</p>
                                        <Link href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`} className="read-more">READ MORE...</Link>
                                    </div>
                                </div>
                            ))}

                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link href="/blog-left-sidebar" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link href="/blog-left-sidebar">1</Link></li>
                                    <li><Link href="/blog-left-sidebar">2</Link></li>
                                    <li><Link href="/blog-left-sidebar">3</Link></li>
                                    <li>
                                        <Link href="/blog-left-sidebar" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft}/>
                </div>
            </div>
        </section>

     )
        
}

export default BlogList;
