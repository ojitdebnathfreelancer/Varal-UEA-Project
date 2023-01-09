import React from 'react';
import dream from '../../../../Assets/ILLUSTRATION.png';
import ellipse21 from '../../../../Assets/Ellipse 21.png';
import ellipse20 from '../../../../Assets/Ellipse 20.png';
import ellipse8 from '../../../../Assets/Ellipse 8.png';
import ellipse11 from '../../../../Assets/Ellipse 11.png';
import '../DreamCSS/DreamCSS.css';

const Dream = () => {
    return (
        <div className='dream-container'>
            <div className='dream-text'>
                <h4>Claim a Free Quote</h4>
                <h1><span>Get started</span> on fulfilling your Dubai or UAE dream.</h1>
                <img className='dream text-inside-dream-img' src={dream} alt="dream img" />
                <h3>UAE & Offshore Company</h3>
                <p>We provide you with information about UAE or Offshore Company Registration & help you setup your company with a bank account and visas.</p>
                <div className='btn-group'>
                    <button>Start a Company</button>
                    <button>Renew a Company</button>
                </div>
                <img className='ellipse20' src={ellipse20} alt="ellipse20" />
                <img className='ellipse21' src={ellipse21} alt="ellipse21" />
                <img className='ellipse8' src={ellipse8} alt="ellipse8" />
            </div>
            <div className='dream-img'>
                <img className='dream' src={dream} alt="dream img" />
                <img className='ellipse11' src={ellipse11} alt="ellipse11" />
            </div>
        </div>
    );
};

export default Dream;