import React from "react";
import './styles.css'

const Card = ({source, name, id, handleClick}) => {
    return (
        <div className="card-container" id={id} onClick={() => handleClick(id)}>
            <img src={require(`../../assets/${source}`)} width={200} />
            <span className="player-name">{name}</span>
        </div>
    )
}

export default Card;