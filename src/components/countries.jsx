import React from "react";
import RegionList from "./regionsList";
import SearchBar from "./searchBar";
import CountryCard from "./countryCard";

const Countries = ({ countries, handleSearch, handleSelect }) => {
    return (
        <main className="container">
            <div className="flex flex-sb maxwidth">
                <SearchBar onSearch={handleSearch} />
                <RegionList onSelect={handleSelect} />
            </div>
            <div className="grid-container">
                {countries.map((country) => (
                    <CountryCard key={country.name.common} country={country} />
                ))}
            </div>
        </main>
    );
};

export default Countries;
