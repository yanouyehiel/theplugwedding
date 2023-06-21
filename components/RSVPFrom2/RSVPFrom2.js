import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const RSVPFrom2 = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        date: '',
        guest: '',
        meal: '',
        reason: '',
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                date: '',
                guest: '',
                meal: '',
                reason: '',
            })
        } else {
            validator.showMessages();
        }
    };


    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="Your Name" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="Your Email" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="radio-buttons">
                        <p>
                            <input type="radio" id="attend" name="radio-group" defaultChecked/>
                                <label htmlFor="attend">Yes, I will be there</label>
                        </p>
                        <p>
                            <input type="radio" id="not" name="radio-group"/>
                            <label htmlFor="not">Sorry, I can’t come</label>
                        </p>
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.guest}
                            type="text"
                            className="form-control"
                            name="guest">
                            <option>Number Of Guests</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                        </select>
                        {validator.message('guest', forms.guest, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.reason}
                            type="text"
                            name="reason"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="What Will You Be Attending" />
                        {validator.message('reason', forms.email, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.meal}
                            type="text"
                            className="form-control"
                            name="meal">
                            <option >Meal Preferences</option>
                            <option>Chicken Soup</option>
                            <option>Motton Kabab</option>
                            <option>Chicken BBQ</option>
                            <option>Mix Salad</option>
                            <option>Beef Ribs </option>
                        </select>
                        {validator.message('meal', forms.meal, 'required')}
                    </div>
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">RSVP</button>
            </div>
        </form >
    )
}

export default RSVPFrom2;