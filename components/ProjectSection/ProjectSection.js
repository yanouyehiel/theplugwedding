import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Gallery, Item } from 'react-photoswipe-gallery'
import SectionTitle from '../SectionTitle'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const portraits = [
    {
        img: '/images/portrait/Portrait.jpg'
    },
    {
        img: '/images/portrait/Portrait-2.jpg'
    },
    {
        img: '/images/portrait/Portrait-3.jpg'
    },
    {
        img: '/images/portrait/Portrait-4.jpg'
    },
    {
        img: '/images/portrait/Portrait-5.jpg'
    },
    {
        img: '/images/portrait/Portrait-6.jpg'
    },
    {
        img: '/images/portrait/Portrait-7.jpg'
    },
    {
        img: '/images/portrait/Portrait-8.jpg'
    },
    {
        img: '/images/portrait/Portrait-9.jpg'
    },
    {
        img: '/images/portrait/Portrait-10.jpg'
    },
    {
        img: '/images/portrait/Portrait-11.jpg'
    },
    {
        img: '/images/portrait/Portrait-12.jpg'
    },
    {
        img: '/images/portrait/Portrait-13.jpg'
    },
    {
        img: '/images/portrait/Portrait-14.jpg'
    },
    {
        img: '/images/portrait/Portrait-15.jpg'
    },
    {
        img: '/images/portrait/Portrait-16.jpg'
    },
    {
        img: '/images/portrait/Portrait-17.jpg'
    },
    {
        img: '/images/portrait/Portrait-18.jpg'
    },
    {
        img: '/images/portrait/Portrait-19.jpg'
    },
    {
        img: '/images/portrait/Portrait-20.jpg'
    },
    {
        img: '/images/portrait/Portrait-21.jpg'
    },
    {
        img: '/images/portrait/Portrait-22.jpg'
    },
    {
        img: '/images/portrait/Portrait-23.jpg'
    },
    {
        img: '/images/portrait/Portrait-24.jpg'
    },
    {
        img: '/images/portrait/Portrait-25.jpg'
    },
    {
        img: '/images/portrait/Portrait-26.jpg'
    },
    {
        img: '/images/portrait/Portrait-27.jpg'
    },
    {
        img: '/images/portrait/Portrait-28.jpg'
    },
    {
        img: '/images/portrait/Portrait-29.jpg'
    },
    {
        img: '/images/portrait/Portrait-30.jpg'
    },
    {
        img: '/images/portrait/Portrait-31.jpg'
    },
    {
        img: '/images/portrait/Portrait-32.jpg'
    },
    {
        img: '/images/portrait/Portrait-33.jpg'
    },
    {
        img: '/images/portrait/Portrait-34.jpg'
    },
    {
        img: '/images/portrait/Portrait-35.jpg'
    },
    {
        img: '/images/portrait/Portrait-36.jpg'
    },
    {
        img: '/images/portrait/Portrait-37.jpg'
    },
    {
        img: '/images/portrait/Portrait-38.jpg'
    },
    {
        img: '/images/portrait/Portrait-39.jpg'
    },
    {
        img: '/images/portrait/Portrait-40.jpg'
    },
    {
        img: '/images/portrait/Portrait-41.jpg'
    },
    {
        img: '/images/portrait/Portrait-42.jpg'
    },
    {
        img: '/images/portrait/Portrait-43.jpg'
    },
    {
        img: '/images/portrait/Portrait-44.jpg'
    },
    {
        img: '/images/portrait/Portrait-45.jpg'
    },
    {
        img: '/images/portrait/Portrait-46.jpg'
    },
    {
        img: '/images/portrait/Portrait-47.jpg'
    },
    {
        img: '/images/portrait/Portrait-48.jpg'
    },
    {
        img: '/images/portrait/Portrait-49.jpg'
    },
    {
        img: '/images/portrait/Portrait-50.jpg'
    },
    {
        img: '/images/portrait/Portrait-51.jpg'
    },
    {
        img: '/images/portrait/Portrait-52.jpg'
    },
    {
        img: '/images/portrait/Portrait-53.jpg'
    },
    {
        img: '/images/portrait/Portrait-54.jpg'
    },
    {
        img: '/images/portrait/Portrait-55.jpg'
    },
    {
        img: '/images/portrait/Portrait-56.jpg'
    },
    {
        img: '/images/portrait/Portrait-57.jpg'
    },
    {
        img: '/images/portrait/Portrait-58.jpg'
    },
    {
        img: '/images/portrait/Portrait-59.jpg'
    },
    {
        img: '/images/portrait/Portrait-60.jpg'
    },
    {
        img: '/images/portrait/Portrait-61.jpg'
    },
    {
        img: '/images/portrait/Portrait-62.jpg'
    },
    {
        img: '/images/portrait/Portrait-63.jpg'
    },
    {
        img: '/images/portrait/Portrait-64.jpg'
    },
    {
        img: '/images/portrait/Portrait-65.jpg'
    },
    {
        img: '/images/portrait/Portrait-66.jpg'
    },
    {
        img: '/images/portrait/Portrait-67.jpg'
    },
    {
        img: '/images/portrait/Portrait-68.jpg'
    },
    {
        img: '/images/portrait/Portrait-69.jpg'
    },
    {
        img: '/images/portrait/Portrait-70.jpg'
    },
    {
        img: '/images/portrait/Portrait-71.jpg'
    },
    {
        img: '/images/portrait/Portrait-72.jpg'
    },
    {
        img: '/images/portrait/Portrait-73.jpg'
    },
    {
        img: '/images/portrait/Portrait-74.jpg'
    },
    {
        img: '/images/portrait/Portrait-75.jpg'
    },
    {
        img: '/images/portrait/Portrait-76.jpg'
    }
]

const ProjectSection = (props) => {
    return (
        // <section className={`wpo-portfolio-section section-padding ${props.prClass}`}>
        //     <div className="container">
        //         <SectionTitle subTitle={'Our Portraits'} MainTitle={'enjoy our quality portrait photos'} />
        //         <div className="sortable-gallery">
        //             <div className="gallery-filters"></div>
        //             <div className="row">
        //                 <div className="col-lg-12">
        //                     <div className="portfolio-grids gallery-container clearfix">
        //                         <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
        //                             <Masonry gutter="60px">
        //                                 {portraits.map((portrait, index) => (
        //                                     <div className="grid" key={index}>
        //                                         <div className="img-holder">
        //                                             <Image src={portrait.img} alt={portrait.img} width={500} height={500} />
        //                                             <div className="portfolio-content">
        //                                                 <h4><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}>{project.title}</Link></h4>
        //                                                 <span>{project.location}- {project.date}</span>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 ))}
        //                             </Masonry>
        //                         </ResponsiveMasonry>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section className={`wpo-portfolio-section-s2 section-padding ${props.prClass}`} id="gallery">
            <div className="container-fluid">
                <SectionTitle MainTitle={'enjoy our quality portrait photos'} subTitle={'Our Portraits'}/>
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <Gallery >
                                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                                        <Masonry columnsCount={4} gutter="30px">
                                            {portraits.map((image, i) => (
                                                <div className="grid" key={i}>
                                                    <Item
                                                        original={image.img}
                                                        thumbnail={image.img}
                                                        width="100%"
                                                        height="100%"
                                                    >
                                                        {({ ref, open }) => (
                                                            <img ref={ref} onClick={open} src={image.img} />
                                                        )}
                                                    </Item>
                                                </div>
                                            ))}
                                        </Masonry>
                                    </ResponsiveMasonry>
                                </Gallery>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;