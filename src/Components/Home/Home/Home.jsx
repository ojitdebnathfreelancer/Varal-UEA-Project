import React from 'react';
import Navbar from '../../Navbar/Navbar/Navbar';
import Benefit from '../Benefit/Benefit/Benefit';
import Company from '../Company/Company/Company';
import Dream from '../Dream/Dream/Dream';
import Footer from '../Footer/Footer/Footer';
import Misson from '../Mission/Misson/Misson';
import RakIcc from '../RakIcc/RakIcc/RakIcc';
import Search from '../Search/Search/Search';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Dream></Dream>
            <Misson></Misson>
            <Company></Company>
            <Benefit></Benefit>
            <RakIcc></RakIcc>
            <Footer></Footer>
        </div>
    );
};

export default Home;