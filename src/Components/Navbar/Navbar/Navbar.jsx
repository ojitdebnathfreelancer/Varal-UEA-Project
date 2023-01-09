import React, { useState } from 'react';
import logo from '../../../Assets/Group 114.png';
import '../NavbarCSS/NavbarCSS.css';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const menuItems = <>
        <li><a className='active' href='/'>Home</a></li>
        <li><a href='/services'>Services</a></li>
        <li><a href='/priging'>Priging</a></li>
        <li><a href='/aboutus'>About Us</a></li>
    </>

    return (
        <nav className='header-font main-nav-container'>
            <div className='logo'>
                <img src={logo} alt="varal uea logo" />
            </div>
            <div className='link-list'>
                <div className='hidden-menu'>
                    <div onClick={() => (setOpenMenu(!openMenu))} className='toggol-btn'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={`phone-nav ${openMenu ? 'display-block' : 'display-none'}`}>
                        {menuItems}
                    </ul>
                </div>

                <ul className='main-menu'>
                    {menuItems}
                    <button>Start a Companey</button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;