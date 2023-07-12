import React from 'react'
import TimeCountDown from '../countdown'


const WeddingCountdown = () => {

    return (
        <section className="wpo-wedding-date">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="clock-grids">
                            <TimeCountDown />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeddingCountdown;