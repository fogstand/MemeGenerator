import React from "react";
import logo from './logo.jpeg';
import style from "./style.css";


function Header() {
    return (
        <header>
            <img 
                src={logo}
                alt="logo"
            />
            <p>Meme Generator</p>
        </header>
    )
}

export default Header