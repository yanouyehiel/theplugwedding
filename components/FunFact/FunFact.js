import React from 'react'
import Image from 'next/image'
import fIcon1 from '/public/images/funfact/1.png'
import fIcon2 from '/public/images/funfact/2.png'
import fIcon3 from '/public/images/funfact/3.png'

const funFact = [
    {
        fIcon: fIcon1,
        title: '160',
        subTitle: 'Happy Couples',
    },
    {
        fIcon: fIcon2,
        title: '503',
        subTitle: 'Events',
    },
    {
        fIcon: fIcon3,
        title: '150',
        subTitle: 'Wedding',
    },
    {
        fIcon: fIcon1,
        title: '306',
        subTitle: 'Shootings',
    },


]


const FunFact = (props) => {
    return (
        <section className={`wpo-fun-fact-section ${props.fClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funFact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3><span>{funfact.title}</span>+</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                    <div className="flower"><Image src={funfact.fIcon} alt=""/></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;