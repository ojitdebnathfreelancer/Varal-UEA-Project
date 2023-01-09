import React from 'react';
import '../CompanyCSS/CompanyCSS.css';
import dunngeon from '../../../../Assets/dungeon.png';
import vactor2 from '../../../../Assets/Vector-2.png';
import vactor1 from '../../../../Assets/Vector-1.png';

const Company = () => {
    return (
        <div className='company'>
            <div className='item'>
                <div>
                    <img src={dunngeon} alt="dungeon" />
                    <h1>UAE Free Zone Company</h1>
                    <p>Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE.</p>
                    <button>Get Started</button>
                </div>
            </div>
            <div className='item'>
                <div>
                    <img src={vactor2} alt="dungeon" />
                    <h1>Dubai Local Companies</h1>
                    <p>The Dubai LLC formation documents are actually articles of organization or a certificate of organization. You can get yours today.</p>
                    <button>Get Started</button>
                </div>
            </div>
            <div className='item'>
                <div>
                    <img src={vactor1} alt="dungeon" />
                    <h1>Offshore Compamies</h1>
                    <p>You can register an offshore company and open its bank account in Dubai. Your agent will help you along all the process</p>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Company;