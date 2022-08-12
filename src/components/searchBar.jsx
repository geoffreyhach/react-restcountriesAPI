import React from "react";

const SearchBar = (props) => {
    return (
        <div className="search-bar-container">
            <label htmlFor="search-bar"></label>
            <input
                className="search-bar"
                placeholder="Search for a country..."
                id="search-bar"
                type="text"
                onChange={props.onSearch}
            />
        </div>
    );
};

export default SearchBar;
