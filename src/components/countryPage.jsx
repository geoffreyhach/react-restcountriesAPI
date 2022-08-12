import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import config from "../config.json";
import CountryInfo from "./countryInfo";
import Loading from "./loading";

const CountryPage = () => {
    const [countryData, setCountryData] = useState(null);

    let arr = useLocation().pathname.split("");
    arr.shift();
    let countryName = arr.join("");

    useEffect(() => {
        async function getData() {
            const apiEndpoint = config.apiEndpoint;

            try {
                const result = await axios(apiEndpoint);
                // console.log(result);
                const data = result.data.filter(
                    (country) =>
                        country.name.common
                            .toLowerCase()
                            .split(" ")
                            .join("") === countryName.toLowerCase()
                )[0];
                setCountryData(data);
            } catch (e) {
                console.log("erreur", e);
            }
        }
        getData();
    }, []);

    return (
        <React.Fragment>
            {countryData ? (
                <CountryInfo countryData={countryData} />
            ) : (
                <Loading />
            )}
        </React.Fragment>
    );
};

export default CountryPage;
