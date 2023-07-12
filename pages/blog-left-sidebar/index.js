import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import BlogList from '../../components/BlogList/BlogList';

const submitHandler = (e) => {
    e.preventDefault()
}


const BlogSingle = (props) => {
    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle='Latest News' pagesub="blog" />
            <BlogList blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <Footer />
        </Fragment>
    )
};
export default BlogSingle;
