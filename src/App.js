import './App.css';
import Header from '../src/components/Header/Header';
import Board from '../src/components/Board/Board';
import { useState, useEffect, useRef } from 'react';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const prevScore = useRef(null);

  useEffect(() => {
    prevScore.current = score;
  }, [score]);

  const handleClick = (id) => {
    if(clickedCards.includes(id)){
      setIsGameOver(true);
      setScore(0);
      setClickedCards([]);
      if(score>=bestScore){
        setBestScore(score);
      } 
    }
    else {
      setClickedCards(clickedCards.concat(id));
      setScore(score + 1);
    }
  }

  const handleRestart = () => {
    setIsGameOver(false);
    setScore(0);
    setClickedCards([]);
  }

  const GameInfo = ({score}) => {
    return (
        <div className="game-over-info">
            <div className="info-text">
                <p className="game-over-info-msg">You failed!</p>
                <p className="game-over-result">Your result: {score}</p>
            </div>
            <div className="buttons">
                <button className="restart-btn" onClick={handleRestart}>Try again!</button>
            </div>
        </div>
    )
  }

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}/>
      {isGameOver && <GameInfo score={prevScore.current}/>}
      <Board handleClick={handleClick} score={score} bestScore={bestScore}/>
    </div>
  );
}

export default App;
