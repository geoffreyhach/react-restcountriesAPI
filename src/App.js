import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CountryPage from "./components/countryPage";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<CountryPage />} />
            </Routes>
        </div>
    );
}

export default App;
