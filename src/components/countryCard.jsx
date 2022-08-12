import React from "react";
import { Link } from "react-router-dom";

const CountryCard = (props) => {
    return (
        <div className="cards">
            <img src={props.country.flags.svg} alt="Flag of the country" />
            <Link to={`/${props.country.name.common.split(" ").join("")}`}>
                {props.country.name.official}
            </Link>
            <p>
                <span>Population:</span>{" "}
                {props.country.population.toLocaleString("en-US")}
            </p>
            <p>
                <span>Region:</span> {props.country.region}{" "}
            </p>
            <p>
                <span>Capital:</span> {props.country.capital}{" "}
            </p>
        </div>
    );
};

export default CountryCard;
