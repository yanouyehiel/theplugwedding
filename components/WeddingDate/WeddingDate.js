import React from 'react'
import sImg1 from '/public/images/slider/Slider-1.jpg'
import sImg2 from '/public/images/slider/Slider-2.jpg'
import TimeCountDown from '../countdown'
import { Slide } from "react-awesome-reveal";
import Image from 'next/image'


const WeddingDate = (props) => {

    return (
        <section className={`wpo-wedding-date ${props.dtClass}`}>
            <div className="container">
                <Slide direction="up">
                    <h2>
                        <span className="shape-1"><Image src={sImg1} alt="" /></span>
                        Esabella & William
                        <span className="shape-2"><Image src={sImg2} alt="" /> </span>
                    </h2>
                    <p>We Are Getting Married November 15,2022</p>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="clock-grids">
                                <TimeCountDown />
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    )
}

export default WeddingDate;