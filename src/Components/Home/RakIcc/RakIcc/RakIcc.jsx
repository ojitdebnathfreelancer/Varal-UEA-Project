import React from 'react';
import '../RakIccCSS/RakIccCSS.css';
import ellipse7 from '../../../../Assets/Ellipse 7.png';
import ellipse11 from '../../../../Assets/Ellipse 11.png';
import ellipse14 from '../../../../Assets/Ellipse 14.png';
import ellipse23 from '../../../../Assets/Ellipse 23.png';

const RakIcc = () => {
    return (
        <div className='rak'>
            <div className='text-area'>
                <p>Most <span>popular affordable pricing</span> per jurisdictions are brought to you to kick off your adventure.</p>
            </div>
            <div className='item-area'>
                <div className='item item-first'>
                    <h3>AJMAN OFFSHORE</h3>
                    <p className='price'><span>$2,997</span> One Time Payment</p>
                    <p className='title'>Ajman Offshore New Company formation includes</p>
                    <ul>
                        <li><span></span>Attestation Charges</li>
                        <li><span></span>Registered Agent</li>
                        <li><span></span>Registered Office</li>
                        <li><span></span>Varal Administrative</li>
                        <li><span></span>Preparing Statutory File</li>
                        <li><span></span>Liasing with Registration Authorities</li>
                        <li><span></span>Due Diligence Appraisal</li>
                        <li><span></span>Keeping The Register</li>
                        <li><span></span>Seal Charges</li>
                        <li><span></span>Certificate of Good Standing</li>
                    </ul>
                    <button>Continue</button>
                    <img className='ellipse7' src={ellipse7} alt="ellipse7" />
                    <img className='ellipse11' src={ellipse11} alt="ellipse11" />
                </div>
                <div className='item item-middel'>
                    <div>
                        <h3>RAK ICC</h3>
                        <p className='price'><span>$2,997</span> One Time Payment</p>
                        <p className='title'>Rak Icc New Company formation
                            includes</p>
                    </div>
                    <ul>
                        <li><span></span>Attestation Charges</li>
                        <li><span></span>Registered Agent</li>
                        <li><span></span>Registered Office</li>
                        <li><span></span>Varal Administrative</li>
                        <li><span></span>Preparing Statutory File</li>
                        <li><span></span>Liasing with Registration Authorities</li>
                        <li><span></span>Due Diligence Appraisal</li>
                        <li><span></span>Keeping The Register</li>
                        <li><span></span>Seal Charges</li>
                        <li><span></span>Certificate of Good Standing</li>
                    </ul>
                    <button>Continue</button>
                </div>
                <div className='item item-last'>
                    <h3>SHARJAH MEDIA CITY</h3>
                    <p className='price'><span>$4,124</span> One Time Payment</p>
                    <p className='title'>Sharjah Media City New
                        Company formation include </p>
                    <ul>
                        <li><span></span>Attestation Charges</li>
                        <li><span></span>Registered Agent</li>
                        <li><span></span>Registered Office</li>
                        <li><span></span>Varal Administrative</li>
                        <li><span></span>Preparing Statutory File</li>
                        <li><span></span>Liasing with Registration Authorities</li>
                        <li><span></span>Due Diligence Appraisal</li>
                        <li><span></span>Keeping The Register</li>
                        <li><span></span>Seal Charges</li>
                        <li><span></span>Certificate of Good Standing</li>
                    </ul>
                    <button>Continue</button>
                    <img className='ellipse14' src={ellipse14} alt="ellipse14" />
                    <img className='ellipse23' src={ellipse23} alt="ellipse23" />
                </div>
            </div>
            <div className='cercul-container'>
                <span className='cercul-1'></span>
                <span className='cercul-2'></span>
                <span className='cercul-3'></span>
            </div>
        </div>
    );
};

export default RakIcc;