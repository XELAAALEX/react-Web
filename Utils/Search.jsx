import React from 'react';
function Search() {
    return (
        <div id="search-bar">
            <input type="text" placeholder="Search anything you want..." aria-label="Search" />
            <img className="search-icon" src="https://img.icons8.com/pastel-glyph/128/search--v2.png" alt="search icon" />
        </div>
    );
}
export default Search;