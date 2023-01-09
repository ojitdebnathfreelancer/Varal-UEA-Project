import React from 'react';
import '../FooterCSS/FooterCSS.css';
import vactor3 from '../../../../Assets/Vector-3.png';
import vactor4 from '../../../../Assets/Vector-4.png';
import group34 from '../../../../Assets/Group 34.png';
import vactor5 from '../../../../Assets/Vector-5.png';
import vactor6 from '../../../../Assets/Vector-6.png';
import vactor7 from '../../../../Assets/Vector-7.png';
import vactor8 from '../../../../Assets/Vector-8.png';
import group100 from '../../../../Assets/Group 100.png';
import ellipse9 from '../../../../Assets/Ellipse 9.png';
import ellipse20 from '../../../../Assets/Ellipse 20.png';
import ellipse21 from '../../../../Assets/Ellipse 21.png';
import ellipse24 from '../../../../Assets/Ellipse 24.png';

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='left-footer'>
                    <p className='title'>Read about our blogs for more information on our processes </p>
                    <div className='start-item'>
                        <div className='start-item-img'>
                            <img src={vactor4} alt="vactor4" />
                        </div>
                        <div className='text'>
                            <p>How to start a company formation in Dubai</p>
                            <span>5 Minutes</span>
                        </div>
                    </div>
                    <div className='start-item'>
                        <div className='start-item-img'>
                            <img src={vactor4} alt="vactor4" />
                        </div>
                        <div className='text'>
                            <p>How to start an Offshore company formation in Dubai</p>
                            <span>5 Minutes</span>
                        </div>
                    </div>
                    <div className='start-item middel sm-footer-none'>
                        <div className='start-item-img'>
                            <img src={vactor4} alt="vactor4" />
                        </div>
                        <div className='text'>
                            <p>SEO Dubai: Who benefits the most?</p>
                            <span>5 Minutes</span>
                        </div>
                    </div>
                    <p className='title'>Satidfied We are When Our Customers Are Happy </p>
                    <div className='contact-item'>
                        <div className='contact-item-img-div'>
                            <img src={vactor3} alt="vactor3" />
                        </div>
                        <div>
                            <p><span>''</span>I am very happy with them. I’ll
                                continue to use their services in
                                future & highly recommend them
                                to anyone,<span>''</span></p>
                            <p className='name'>Muhib Abrar</p>
                        </div>
                    </div>
                    <div className='contact-item'>
                        <div className='contact-item-img-div'>
                            <img src={vactor3} alt="vactor3" />
                        </div>
                        <div>
                            <p><span>''</span>Rama has a high level of integrity,
                                intellect, knowledge of his
                                business, resourcefulness and
                                humanity,<span>''</span></p>
                            <p className='name'>Colin Saldahna</p>
                        </div>
                    </div>
                    <div className='contact-item last-contact-item'>
                        <div className='contact-item-img-div'>
                            <img src={vactor3} alt="vactor3" />
                        </div>
                        <div>
                            <p><span>''</span>Your advise was so complete that I
                                actually realized how beneficial
                                this would be to my clients and my
                                business.<span>''</span></p>
                            <p className='name'>Mark Swann</p>
                        </div>
                    </div>
                    <img className='ellipase9' src={ellipse9} alt="ellipase9" />
                    <img className='ellipase20' src={ellipse20} alt="ellipase20" />
                    <img className='ellipase21' src={ellipse21} alt="ellipase21" />
                    <img className='ellipase20-2' src={ellipse20} alt="ellipase20-2" />
                    <img className='ellipase24' src={ellipse24} alt="ellipase24" />
                </div>
                <img className='bg-img' src={group100} alt="group100" />
                <div className='right-footer'>
                    <p className='title right-footer-title'>Get to know the whole us and more of our services </p>
                    <div className='sm-device-items'>
                        <div className='sm-device'>
                            <div className='left-device'>
                                <div className='right-item'>
                                    <h3>Services</h3>
                                    <p>Products</p>
                                    <p>Solutions</p>
                                    <p>Assurance</p>
                                    <p>FAQ</p>
                                    <p>Working at Varal-Singhania</p>
                                </div>
                                <div className='right-item'>
                                    <h3>About</h3>
                                    <p>About Us</p>
                                    <p>Contact Us</p>
                                </div>
                                <div className='right-item'>
                                    <h3>Subscribe Now</h3>
                                    <p className='right-item-subscribe-text'>Sunbscribe now to receive our Newsletters about amazing opportunities in Dubai</p>
                                </div>
                                <div className='subscribe'>
                                    <label>
                                        <input placeholder='Enter email address'></input>
                                        <img src={group34} alt="group34" />
                                    </label>
                                </div>
                            </div>
                            <div className='right-device'>
                                <div className='right-item'>
                                    <h3>Policies</h3>
                                    <p>Privacy Policy</p>
                                    <p>Terms & Conditions</p>
                                </div>
                                <div className='right-item'>
                                    <h3>Address</h3>
                                    <p>608 One Lake Plaza, Cluster T, Al Sarayat Street, Jumeirah
                                        Lake Towers</p>
                                    <p>Dubai</p>
                                    <p>United Arab Emirates</p>
                                </div>
                                <div className='socila-links'>
                                    <img src={vactor5} alt="vactor5" />
                                    <img src={vactor6} alt="vactor6" />
                                    <img src={vactor7} alt="vactor7" />
                                    <img src={vactor8} alt="vactor8" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg-device-footer-items'>
                        <div className='right-item'>
                            <h3>Services</h3>
                            <p>Products</p>
                            <p>Solutions</p>
                            <p>Assurance</p>
                            <p>FAQ</p>
                            <p>Working at Varal-Singhania</p>
                        </div>
                        <div className='right-item'>
                            <h3>Policies</h3>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                        <div className='right-item'>
                            <h3>About</h3>
                            <p>About Us</p>
                            <p>Contact Us</p>
                        </div>
                        <div className='right-item'>
                            <h3>Address</h3>
                            <p>608 One Lake Plaza, Cluster T, Al Sarayat Street, Jumeirah
                                Lake Towers</p>
                            <p>Dubai</p>
                            <p>United Arab Emirates</p>
                        </div>
                        <div className='right-item'>
                            <p>Office Hours: Sunday to Thursday 8:30 AM to 6:30 PM [GMT+4]</p>
                            <p>M: +971 55 794 2016</p>
                            <p>O: +971 4 447 2061</p>
                        </div>
                        <div className='right-item'>
                            <h3>Subscribe Now</h3>
                            <p className='right-item-subscribe-text'>Sunbscribe now to receive our Newsletters about amazing opportunities in Dubai</p>
                        </div>
                        <div className='subscribe'>
                            <label>
                                <input placeholder='Enter email address'></input>
                                <img src={group34} alt="group34" />
                            </label>
                        </div>
                        <div className='socila-links'>
                            <img src={vactor5} alt="vactor5" />
                            <img src={vactor6} alt="vactor6" />
                            <img src={vactor7} alt="vactor7" />
                            <img src={vactor8} alt="vactor8" />
                        </div>
                    </div>
                </div>
            </div>
            <p className='copyright'>Varaluae 2021 &copy; All Right Reserved</p>
        </div>
    );
};

export default Footer;