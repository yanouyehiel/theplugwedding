import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Gallery, Item } from 'react-photoswipe-gallery'
import SectionTitle from '../SectionTitle'

const Portfolios = [
    // {
    //     Pimg: '/images/portfolio/12.jpeg',
    // },
    // {
    //     Pimg: '/images/portfolio/13.jpeg',
    // },
    // {
    //     Pimg: '/images/portfolio/15.jpeg',
    // },
    // {
    //     Pimg: '/images/portfolio/24.jpeg',
    // },
    // {
    //     Pimg: '/images/portfolio/14.jpeg',
    // },
    // {
    //     Pimg: '/images/portfolio/25.jpeg', /*changed to 25 instead of 17*/
    // },
    // {
    //     Pimg: '/images/portfolio/17.jpeg', /*changed to 17 instead of 25*/
    // },
    // {
    //     Pimg: '/images/portfolio/16.jpeg',
    // },
    {
        Pimg: '/images/portfolio/p/p1.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p2.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p3.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p4.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p5.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p6.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p7.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p8.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p9.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p10.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p11.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p12.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p13.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p14.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p15.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p16.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p17.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p18.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p19.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p20.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p21.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p22.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p23.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p24.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p25.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p26.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p27.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p28.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p29.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p30.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p31.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p32.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p33.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p34.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p35.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p36.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p37.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p38.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p39.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p40.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p41.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p42.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p43.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p44.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p45.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p46.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p47.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p48.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p49.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p50.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p51.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p52.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p53.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p54.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p55.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p56.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p57.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p58.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p59.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p60.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p61.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p62.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p63.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p64.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p65.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p66.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p67.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p68.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p69.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p70.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p71.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p72.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p73.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p74.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p75.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p76.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p77.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p79.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p80.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p81.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p82.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p83.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p84.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p85.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p86.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p87.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p88.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p89.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p90.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p91.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p92.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p93.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p94.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p95.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p96.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p97.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p98.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p99.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p100.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p101.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p102.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p103.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p104.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p105.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p106.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p107.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p108.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p109.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p110.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p111.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p112.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p113.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p114.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p115.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p116.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p117.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p118.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p119.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p120.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p121.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p122.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p123.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p124.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p125.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p126.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p127.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p128.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p129.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p130.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p131.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p132.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p133.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p134.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p135.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p136.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p138.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p139.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p140.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p141.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p142.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p143.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p144.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p145.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p146.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p147.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p148.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p149.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p150.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p151.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p152.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p153.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p154.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p155.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p156.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p157.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p158.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p159.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p160.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p161.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p162.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p163.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p164.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p165.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p166.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p167.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p168.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p169.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p170.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p171.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p172.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p173.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p174.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p175.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p176.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p177.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p178.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p179.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p180.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p181.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p182.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p183.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p184.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p185.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p186.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p187.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p188.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p189.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p190.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p191.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p192.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p193.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p194.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p195.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p196.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p197.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p198.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p199.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p200.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p201.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p202.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p203.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p204.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p205.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p206.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p207.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p208.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p209.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p210.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p211.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p212.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p213.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p214.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p215.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p216.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p217.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p218.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p219.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p220.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p221.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p222.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p223.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p224.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p225.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p226.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p227.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p228.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p229.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p230.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p231.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p232.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p233.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p234.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p235.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p236.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p237.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p238.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p239.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p240.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p241.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p242.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p243.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p244.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p245.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p246.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p247.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p248.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p251.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p252.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p253.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p255.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p258.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p259.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p260.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p261.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p262.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p263.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p264.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p265.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p266.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p267.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p268.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p269.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p270.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p271.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p272.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p272.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p273.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p274.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p275.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p276.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p277.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p278.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p279.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p280.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p281.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p282.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p283.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p284.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p285.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p286.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p287.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p288.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p289.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p290.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p291.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p292.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p293.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p294.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p295.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p296.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p297.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p298.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p299.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p300.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p301.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p302.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p303.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p304.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p305.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p306.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p320.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p323.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p324.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p325.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p326.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p327.jpg',
    },
    {
        Pimg: '/images/portfolio/p/p328.jpg',
    }
]

const PortfolioSectionS2 = (props) => {
    return (

        <section className={`wpo-portfolio-section-s2 section-padding ${props.prClass}`} id="gallery">
            <div className="container-fluid">
                <SectionTitle MainTitle={'Discover in pictures some images of our weddings'} subTitle={'Our weddings'}/>
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
                                                        width="100%"
                                                        height="100%"
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

export default PortfolioSectionS2;