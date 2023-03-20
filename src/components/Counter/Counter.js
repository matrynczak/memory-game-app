import React from "react";
import './styles.css'

const Counter = ({score, bestScore}) => {

    return (
        <div className="score-container">
            <span>Points: {score}</span>
            <span>Best score: {bestScore}</span>
        </div>
    )
}

export default Counter;