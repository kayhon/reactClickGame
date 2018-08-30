import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
    render() {
    return (
        <div className="header">
        <h1>Injustice 2 Click Game</h1>
        <p>
            Click on a Fighter to earn points, but don't click a Fighter twice!
        </p>
        {/* <p id="guessMsg">{props.msg}</p> */}
        </div>
    );
    }
}

export default Header;
