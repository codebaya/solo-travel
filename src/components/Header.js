import React from "react";
import logo from '../images/travel-logo.png'
export default function Header() {
    return (
        <div className="header">
            <img className="header-logo-image" src={logo}/>
            <a href="" className="header-title">My Travel Journal</a>

        </div>

    )
}