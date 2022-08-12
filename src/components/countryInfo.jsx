import React from "react";
import { Link } from "react-router-dom";

const CountryInfo = ({ countryData }) => {
    return (
        <main className="container container--page maxwidth">
            <Link to="/" className="title">
                <button className="back-btn">Back</button>
            </Link>
            <span className="divider"></span>
            <span className="divider"></span>
            <img src={countryData.flags.svg} alt="Drapeau" />
            <div className="geography">
                <h1>{countryData.name.common}</h1>
                <p>
                    <span>Native Name: </span>

                    {
                        countryData.name.nativeName[
                            Object.keys(countryData.name.nativeName)[0]
                        ].common
                    }
                </p>
                <p>
                    <span>Population: </span>
                    {countryData.population.toLocaleString("en-US")}
                </p>
                <p>
                    <span>Region: </span>
                    {countryData.region}
                </p>
                <p>
                    <span>Sub Region: </span>
                    {countryData.subregion}
                </p>
                <p>
                    <span>Capital: </span>
                    {countryData.capital}
                </p>
            </div>
            <div className="misc">
                <p>
                    <span>Top Level Domain: </span>
                    {countryData.tld}
                </p>
                <p>
                    <span>Currencies: </span>
                    {Object.keys(countryData.currencies)}
                </p>
                <p>
                    <span>Languages: </span>
                    {countryData.region}
                </p>
            </div>
            <div className="borders--section">
                <span>Border Countries: </span>
                {countryData.borders ? (
                    <div>
                        {" "}
                        {countryData.borders.map((c) => (
                            <div key={c} className="borders-btn">
                                {c}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>None</p>
                )}
            </div>
        </main>
    );
};

export default CountryInfo;
