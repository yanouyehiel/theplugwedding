import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import SectionTitle from '../SectionTitle'
import { Gallery, Item } from 'react-photoswipe-gallery'

const Portfolios = [
    {
        Pimg: '/images/portfolio/18.jpg',
    },
    {
        Pimg: '/images/portfolio/19.jpg',
    },
    {
        Pimg: '/images/portfolio/21.jpg',
    },
    {
        Pimg: '/images/portfolio/20.jpg',
    },
    {
        Pimg: '/images/portfolio/22.jpg',
    },
    {
        Pimg: '/images/portfolio/26.jpg',
    }

]

const PortfolioSectionS3 = (props) => {
    return (

        <section className={`wpo-portfolio-section-s5 section-padding ${props.prClass}`} id="gallery">
            <div className="container">
                <SectionTitle subTitle={'Sweet Memories'} MainTitle={'Our Captured Moments'} />
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <Gallery >
                                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
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

export default PortfolioSectionS3;