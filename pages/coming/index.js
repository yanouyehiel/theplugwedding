import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import WeddingCountdown from '../../components/WeddingCountdown/WeddingCountdown';


const ComingSoonPage =() => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <section className="static-hero-s4">
                <div className="hero-container">
                    <div className="hero-inner">
                        <div className="container">
                            <div className="coming-soon-section">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="coming-soon-text">
                                            <h2>Coming Soon</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <WeddingCountdown/>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="wpo-coming-contact">
                                            <form onSubmit={SubmitHandler} className="contact-validation-active">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-5 col-sm-6 col-12">
                                                        <input type="text" className="form-control" name="name" id="name"
                                                            placeholder="Name*"/>
                                                    </div>
                                                    <div className="col-lg-5 col-sm-6 col-12">
                                                        <input type="email" className="form-control" name="email" id="email"
                                                            placeholder="Email"/>
                                                    </div>
                                                    <div className="col-lg-2 col-sm-4 col-6">
                                                        <div className="submit-area">
                                                            <button type="submit">Notify Me</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};
export default ComingSoonPage;
