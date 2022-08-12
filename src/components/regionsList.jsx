import React from "react";

const RegionList = (props) => {
    return (
        <select onChange={(e) => props.onSelect(e)} name="regions" id="regions">
            <option value="all" defaultValue>
                All
            </option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    );
};

export default RegionList;
