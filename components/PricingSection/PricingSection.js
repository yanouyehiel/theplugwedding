import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle'


const Pricing = [
    {
        pakage: 'Basic Package',
        price: '250',
        subs: 'Monthly',
        l1: 'Stylish makeup for bride.',
        l2: 'Top label arrengement',
        l3: 'Amazing meal & breakfast',
        l4: 'Manicure & Pedicure',
        l5: 'Full body Polish'
    },
    {
        pakage: 'Standard Package',
        price: '450',
        subs: 'Monthly',
        l1: 'Stylish makeup for bride.',
        l2: 'Top label arrengement',
        l3: 'Amazing meal & breakfast',
        l4: 'Manicure & Pedicure',
        l5: 'Full body Polish'
    },
    {
        pakage: 'Luxary Package',
        price: '650',
        subs: 'Yearly',
        l1: 'Stylish makeup for bride.',
        l2: 'Top label arrengement',
        l3: 'Amazing meal & breakfast',
        l4: 'Manicure & Pedicure',
        l5: 'Full body Polish'
    },
]


const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

const PricingSection = (props) => {

    return (
        <section className={`wpo-pricing-section section-padding ${props.pvClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Choose Yours'} MainTitle={'Wedding Packages'} />
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        {Pricing.map((pricing, pitem) => (

                            <div className="col col-lg-4 col-md-6 col-12" key={pitem}>
                                <div className="wpo-pricing-item">
                                    <div className="wpo-pricing-top">
                                        <div className="wpo-pricing-text">
                                            <h4>{pricing.pakage}</h4>
                                            <h2>${pricing.price}<span>/{pricing.subs}</span></h2>
                                        </div>
                                    </div>
                                    <div className="shape"><img src='/images/pricing/p-shape.svg' alt=""/></div>
                                    <div className="wpo-pricing-bottom">
                                        <div className="wpo-pricing-bottom-text">
                                            <ul>
                                                <li>{pricing.l1}</li>
                                                <li>{pricing.l2}</li>
                                                <li>{pricing.l3}</li>
                                                <li>{pricing.l4}</li>
                                                <li>{pricing.l5}</li>
                                            </ul>
                                            <Link onClick={ClickHandler} className="theme-btn" href="/pricing">Choose Plan</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection;