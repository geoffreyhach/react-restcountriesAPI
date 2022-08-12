import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config.json";
import Countries from "./countries";
import Loading from "./loading";

const CountryList = () => {
    const [countries, setCountries] = useState(null);
    const [selectedRegion, setRegion] = useState("all");
    const [inputText, setinputText] = useState("");

    const handleSearch = (e) => {
        setinputText(e.target.value.toLowerCase());
        setRegion("all");
        document.getElementById("regions").selectedIndex = "0";
    };

    const handleSelect = (e) => {
        setRegion(e.target.value);
        setinputText("");
        document.querySelector(".search-bar").value = "";
    };

    useEffect(() => {
        async function getData() {
            const apiEndpoint = config.apiEndpoint;

            try {
                const result = await axios.get(apiEndpoint);

                const filterdData = result.data.filter(
                    (country) => country.region.toLowerCase() === selectedRegion
                );

                if (inputText === "") {
                    selectedRegion === "all"
                        ? setCountries(result.data)
                        : setCountries(filterdData);
                } else {
                    setCountries(
                        result.data.filter(
                            (country) =>
                                country.name.common
                                    .toLowerCase()
                                    .includes(inputText) ||
                                country.name.official
                                    .toLowerCase()
                                    .includes(inputText)
                        )
                    );
                }
            } catch (e) {
                console.log("erreur", e);
            }
        }
        getData();
    });

    return (
        <React.Fragment>
            {countries ? (
                <Countries
                    countries={countries}
                    handleSearch={handleSearch}
                    handleSelect={handleSelect}
                />
            ) : (
                <Loading />
            )}
        </React.Fragment>

        // <main className="container">
        //     <div className="flex flex-sb maxwidth">
        //         <SearchBar onSearch={handleSearch} />
        //         <RegionList onSelect={handleSelect} />
        //     </div>
        //     <div className="grid-container">
        //         {countries.map((country) => (
        //             <CountryCard key={country.name.common} country={country} />
        //         ))}
        //     </div>
        // </main>
    );
};

export default CountryList;
