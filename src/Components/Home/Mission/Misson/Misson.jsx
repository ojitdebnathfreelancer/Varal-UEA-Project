import React from 'react';
import '../MissionCSS/MissonCSS.css';
import group117 from '../../../../Assets/Group 117.png'

const Misson = () => {
    return (
        <div className='mission'>
            <div className='title'>
                <p>Watch the video about UAE or Offshore Company Registration</p>
                <span><img src={group117} alt="video-img" /></span>
            </div>
            <h2><span>Dedicated</span><br /> to our mission we are</h2>
            <p className='text'>Our services include Company Formation & Renewals, Trust & Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote Management, Stock Trading Platforms, Ownership Solutions.</p>
        </div>
    );
};

export default Misson;