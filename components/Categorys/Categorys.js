import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import cImg1 from '/public/images/category/1.jpg'
import cImg2 from '/public/images/category/2.jpg'
import cImg3 from '/public/images/category/3.jpg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Categorys = () => {
    return (

        <section className="wpo-category-section">
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="wpo-category-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="wpo-category-item">
                                <div className="wpo-category-img">
                                    <Image src={cImg1} alt=""/>
                                </div>
                                <div className="wpo-category-text">
                                    <Link onClick={ClickHandler} href="/shop">Wedding Shoes</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="wpo-category-item">
                                <div className="wpo-category-img">
                                    <Image src={cImg2} alt=""/>
                                </div>
                                <div className="wpo-category-text">
                                    <Link onClick={ClickHandler} href="/shop">Wedding Cake</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="wpo-category-item">
                                <div className="wpo-category-img">
                                    <Image src={cImg3} alt=""/>
                                </div>
                                <div className="wpo-category-text">
                                    <Link onClick={ClickHandler} href="/shop">Wedding bouquet</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categorys;