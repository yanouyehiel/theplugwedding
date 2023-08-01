import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Gallery, Item } from 'react-photoswipe-gallery'


const Portfolios = [
    {
        Pimg: '/images/portfolio/10.jpg',
    },
    {
        Pimg: '/images/portfolio/8.jpg',
    },
    {
        Pimg: '/images/portfolio/6.jpg',
    },
    {
        Pimg: '/images/portfolio/5.jpg',
    },
    {
        Pimg: '/images/portfolio/9.jpg',
    },
    {
        Pimg: '/images/portfolio/7.jpg',
    },
    {
        Pimg: '/images/portfolio/11.jpg',
    },
    {
        Pimg: '/images/portfolio/23.jpg',
    },

]

const PortfolioSection = (props) => {
    return (

        <section className={`wpo-portfolio-section-s2 section-padding ${props.prClass}`} id="gallery">

            <div className="container">
                <div className="wpo-section-title">
                    <h4>Sweet Memories</h4>
                    <h2>Our Captured Moments</h2>
                </div>
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <Gallery >
                                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                                        <Masonry columnsCount={4} gutter="30px">
                                            {Portfolios.map((image, i) => (
                                                <div className="grid" key={i}>
                                                    <Item
                                                        original={image.Pimg}
                                                        thumbnail={image.Pimg}
                                                        width="600"
                                                        height="700"
                                                    >
                                                        {({ ref, open }) => (
                                                            <img ref={ref} onClick={open} src={image.Pimg} />
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

export default PortfolioSection;