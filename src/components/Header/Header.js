import React from "react"

/* ASSETS */
import "./Header.scss"
import logo from "../../assets/img/svg/free-code-camp-logo.svg"
import expand from "../../assets/img/svg/expand.svg" // damn, it was a png -.-

export default function Header() {
    return (
        <div className="header">
            <div className="header-meta">
                <img src={logo} className="header-meta__logo icon" />
                <h3>Editor</h3>
            </div>
            <div className="header-tools">
                <img src={expand} className="icon right" />
            </div>
        </div>
    )
}