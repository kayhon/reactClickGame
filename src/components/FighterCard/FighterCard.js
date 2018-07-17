import React from "react";
import "./FighterCard.css";

const Fighters = props => (
    <div className="card" onClick={() => props.clickedFighter(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)

export default Fighters;