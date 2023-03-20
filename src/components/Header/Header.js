import React, { useState } from "react";
import Counter from '../Counter/Counter'
import './styles.css'

const Header = ({score, bestScore}) => {

    return (
        <div className="header">
            <div className="logo">
                <img src={require('../../assets/football-icon.jpeg')}></img>
            </div>
            <p>Click the image but don't touch the same more than once! </p>
            <div className="point-counter">
                <Counter score={score} bestScore={bestScore}/>
            </div>
        </div>
    )
}

export default Header;