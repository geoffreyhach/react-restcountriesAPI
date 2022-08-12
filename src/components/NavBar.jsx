import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        if (!darkMode) setDarkMode(true);
        if (darkMode) setDarkMode(false);
    };

    if (darkMode) {
        document.documentElement.style.setProperty(
            "--color-light",
            "hsl(209, 23%, 22%)"
        );
        document.documentElement.style.setProperty(
            "--color-white",
            "hsl(0, 0%, 100%)"
        );
        document.documentElement.style.setProperty(
            "--color-accent",
            "hsl(207, 26%, 17%)"
        );
        document.documentElement.style.setProperty(
            "--color-invert",
            "hsl(0, 0%, 100%)"
        );
    }

    if (!darkMode) {
        document.documentElement.style.setProperty(
            "--color-light",
            "hsl(0, 0%, 100%)"
        );
        document.documentElement.style.setProperty(
            "--color-white",
            "hsl(0, 0%, 100%)"
        );
        document.documentElement.style.setProperty(
            "--color-accent",
            "hsl(0, 0%, 98%)"
        );
        document.documentElement.style.setProperty(
            "--color-invert",
            "hsl(200, 15%, 8%)"
        );
    }

    // - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
    // - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
    // - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
    // - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
    // - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
    // - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

    return (
        <nav className="primary-navigation maxwidth">
            <Link to="/" className="title">
                <h1>Where in the world?</h1>
            </Link>
            {darkMode ? (
                <button onClick={handleDarkMode} className="theme-btn">
                    <img
                        src="https://api.iconify.design/ph:sun.svg?color=%23888888"
                        alt=""
                    />
                    <p>Light Mode</p>
                </button>
            ) : (
                <button onClick={handleDarkMode} className="theme-btn">
                    <img
                        src="https://api.iconify.design/ph:moon.svg?color=%23888888"
                        alt=""
                    />
                    <p>Dark Mode</p>
                </button>
            )}
        </nav>
    );
};

export default NavBar;
