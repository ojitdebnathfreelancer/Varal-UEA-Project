import React from 'react';
import search from '../../../../Assets/search.png';
import '../SearchCSS/Search.css';

const Search = () => {
    return (
        <div className='search-container'>
            <label>
                <img src={search} alt="search" />
                <input placeholder='Search a term | Topic'></input>
            </label>
        </div>
    );
};

export default Search;