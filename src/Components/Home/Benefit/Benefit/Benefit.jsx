import React from 'react';
import '../BenefitCSS/BenefitCSS.css';
import illustration03 from '../../../../Assets/ILLUSTRATION 03  1.png';
import vactor from '../../../../Assets/Vector.png';
import group2 from '../../../../Assets/Group-2.png';
import group from '../../../../Assets/Group.png';
import group1 from '../../../../Assets/Group-1.png';
import ellipase19 from '../../../../Assets/Ellipse 19.png';
import ellipase27 from '../../../../Assets/Ellipse 27.png';
import ellipase24 from '../../../../Assets/Ellipse 24.png';
import ellipase14 from '../../../../Assets/Ellipse 14.png';
import ellipase25 from '../../../../Assets/Ellipse 25.png';
import ellipase13 from '../../../../Assets/Ellipse 13.png';
import ellipase7 from '../../../../Assets/Ellipse 7.png';

const Benefit = () => {
    return (
        <div className='benefit'>
            <div className='left-benefit'>
                <div className='text'>
                    <p>Learn the ways in which you can benefit
                        from a UAE/Offshore Company. Then get
                        started on fulfilling your UAE dream.</p>
                    <h3>Claim a Free Quote</h3>
                </div>
                <div className='item right-first-item phone-mt90 lg-d-none d-block'>
                    <div className='img-div'>
                        <img src={group} alt="group" />
                    </div>
                    <h2>Advice & Guidance</h2>
                    <p className='padding-right-32'>All activities in the UAE are licensed.
                        Whether manufacturing, finance,
                        trading, marketing, consultancy or
                        restaurants. In some countries only
                        manufacturing is licensed. In others
                        there is a threshold below which
                        business are encouraged. Get our
                        insightfull guidance today.</p>
                    <span>Learn more
                        <img src={vactor} alt="vactor" />
                    </span>
                </div>
                <div className='item mt-110 d-none'>
                    <div className='img-div'>
                        <img src={illustration03} alt="illustration03" />
                    </div>
                    <h2>Bank Account Setup</h2>
                    <p className='padding-right'>There are many banks in the United
                        Arab Emirates [UAE]. Both locally
                        owned and branches of
                        multinational ones. Foreign banks
                        adjust according to their parent s
                        strategies and have changed local
                        requirements overnight in the past.
                        But we are here to help you.</p>
                    <span>Learn more
                        <img src={vactor} alt="vactor" />
                    </span>
                </div>
                <div className='item mt-110 d-none'>
                    <div className='img-div'>
                        <img src={group2} alt="group2" />
                    </div>
                    <h2>UAE Company Visas</h2>
                    <p>Your application for visas is critical
                        especially if you intend to move to
                        Dubai. This becomes even more
                        urgent if your family will also move
                        with you. All the paperwork is done
                        on your behalf smoothly so that you
                        may only focus on doing what
                        matters most to you.</p>
                    <span>Learn more
                        <img src={vactor} alt="vactor" />
                    </span>
                </div>
                <img className='ellipase19' src={ellipase19} alt="ellipase19" />
                <img className='ellipase14' src={ellipase14} alt="ellipase14" />
                <img className='ellipase13' src={ellipase13} alt="ellipase13" />
                <img className='ellipase7' src={ellipase7} alt="ellipase7" />
            </div>
            <div className='left-benefit right-benefit'>
                <div className='item right-first-item phone-mt90 d-none'>
                    <div className='img-div'>
                        <img src={group} alt="group" />
                    </div>
                    <h2>Advice & Guidance</h2>
                    <p className='padding-right-32'>All activities in the UAE are licensed.
                        Whether manufacturing, finance,
                        trading, marketing, consultancy or
                        restaurants. In some countries only
                        manufacturing is licensed. In others
                        there is a threshold below which
                        business are encouraged. Get our
                        insightfull guidance today.</p>
                    <span>Learn more
                        <img src={vactor} alt="vactor" />
                    </span>
                </div>
                <div className='item mt-110 lg-d-none d-block'>
                    <div className='img-div'>
                        <img src={illustration03} alt="illustration03" />
                    </div>
                    <h2>Bank Account Setup</h2>
                    <p className='padding-right'>There are many banks in the United
                        Arab Emirates [UAE]. Both locally
                        owned and branches of
                        multinational ones. Foreign banks
                        adjust according to their parent s
                        strategies and have changed local
                        requirements overnight in the past.
                        But we are here to help you.</p>
                    <span>Learn more
                        <img src={vactor} alt="vactor" />
                    </span>
                </div>
                <div className='item mt-90 d-none'>
                    <div className='img-div'>
                        <img src={group1} alt="group1" />
                    </div>
                    <h2>Registration Document Perparation</h2>
                    <p className='padding-right'>Several documents must be
                        prepared to start the process of
                        registering a new company in the
                        United Arab Emirates. Be it a Dubai
                        local company, a free zone one or an
                        offshore entity. Your registered
                        agent is dedicated to get this done
                        for you for a seamless process.</p>
                    <span>Learn more
                        <img src={vactor} alt="vactor" />
                    </span>
                </div>
                <div className='text right-text'>
                    <p>We have gathered a team of
                        professionals to craft adequate
                        services you can rely on for a friction
                        free setup in UAE.</p>
                    <h3>More about our services <img src={vactor} alt="vactor" /></h3>
                </div>
                <img className='ellipase27' src={ellipase27} alt="ellipase27" />
                <img className='ellipase25' src={ellipase25} alt="ellipase25" />
                <img className='ellipase24' src={ellipase24} alt="ellipase24" />
            </div>
        </div>
    );
};

export default Benefit;