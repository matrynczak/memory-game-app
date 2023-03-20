import React, { useEffect, useState } from "react";
import { getPlayersData } from "./players-data";
import './styles.css'
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import uniqid from 'uniqid';

const playersList = getPlayersData();

const Board = ({handleClick, score}) => {

    const [isWin, setIsWin] = useState(false);

    // Durstenfeld shuffle algorithm
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    useEffect(() => {
        shuffleArray(playersList);
    });

    useEffect(() => {
        handleWinner(score);
    });

    const handleWinner = (bestScore) => {
        if(playersList.length === bestScore){
            setIsWin(true);
        }
    }

    const WinInfo = () => {
        return (
            <div className="win-info">
                <div className="win-text">
                    <p className="win-info-msg">🎉 Congratulations! You reach max amount of points! 🎉</p>
                </div>
            </div>
        )
    }

    return (
        <div className="board-container">
            {isWin && <WinInfo score={score}/>}
            {playersList.map(item => <Card handleClick={handleClick} name={item.name} source={item.source} id={item.id} key={uniqid()}/>)}
            <Footer />
        </div>
        
    )
}

export default Board;