import React from "react";
import "../styles/Navbar.css";

const Navbar = props => (
    <div className="navbar sticky-top">
    <a className="navbar-brand" href="/React-Click-Game/">
        Click Game{" "}
    </a>

    <li className="score">
      *Score: {props.score} | Top Score: {props.bestScore}{" "}
    </li>
    {/* /*  <p id="guessMsg">{props.msg}</p>  */}
    {/* <li id="rw">{props.rightWrong}</li> */}
    </div>
);

export default Navbar;
