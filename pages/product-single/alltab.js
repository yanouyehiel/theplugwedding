import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const ProductTabs = (props) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const SubmitHandler = (e) => {
        e.preventDefault()
    }



    return (
        <div className="row">
            <div className="col col-xs-12">
                <div className="product-info">
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Description" {...a11yProps(0)} />
                            <Tab label="Review" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <div id="Schedule">
                            <p>Samsa woke from troubled dreams, he found himself transformed in his bed into a
                                horrible vermin. He lay on his armour-like back, and if he lifted his head a
                                little he could see his brown belly, slightly domed and divided by arches into
                                stiff sections. The bedding was hardly able to cover it and seemed ready to
                                slide off any moment. His many legs, pitifully thin compared with the size of
                                the rest of him.</p>
                            <p>The bedding was hardly able to cover it and seemed ready to slide off any moment.
                                His many legs, pitifully thin compared with the size of the rest of himSamsa
                                woke from troubled dreams, he found himself transformed in his bed into a
                                horrible vermin.</p>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="row">
                            <div className="col col-lg-10 col-12">
                                <div className="client-rv">
                                    <div className="client-pic">
                                        <img src='/images/shop/shop-single/review/img-1.jpg' alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="name-rating-time">
                                            <div className="name-rating">
                                                <div>
                                                    <h4>Jenefar Willium</h4>
                                                </div>
                                                <div className="product-rt">
                                                    <span>25 Sep 2022</span>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-rv">
                                    <div className="client-pic">
                                        <img src='/images/shop/shop-single/review/img-2.jpg' alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="name-rating-time">
                                            <div className="name-rating">
                                                <div>
                                                    <h4>Maria Bannet</h4>
                                                </div>
                                                <div className="product-rt">
                                                    <span>28 Sep 2022</span>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-lg-12 col-12 review-form-wrapper">
                                <div className="review-form">
                                    <h4>Add a review</h4>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <form onSubmit={SubmitHandler}>
                                        <div className="give-rat-sec">
                                            <p>Your rating *</p>
                                            <div className="give-rating">
                                                <label>
                                                    <input type="radio" name="stars" value="1" />
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="2" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="3" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="4" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="5" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Name *"
                                                required />
                                        </div>
                                        <div>
                                            <input type="email" className="form-control" placeholder="Email *"
                                                required />
                                        </div>
                                        <div>
                                            <textarea className="form-control"
                                                placeholder="Review *"></textarea>
                                        </div>
                                        <div className="rating-wrapper">
                                            <div className="submit">
                                                <button type="submit" className="theme-btn-s2">Post
                                                    review</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </div>
        </div>
    );
}

export default ProductTabs;