import React, { useDebugValue, useState } from 'react';
import Square from './Square';
import EndGame from './EndGame';

const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winCombination = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];

const TicTacToe = () => {
    const [grid, setGrid] = useState(Array(9).fill(INITIAL));
    const [player, setPlayer] = useState(false);
    const [gameFinished, setgameFinished] = useState(false); 
    const [draw, setDraw] = useState(false);
    const [winCount, setWinCount] = useState({X: 0, O:0})

    function isGameOver() {
        if(!gameFinished){
            // check for winning of X
            for(let gridIndex = 0; gridIndex < 8;gridIndex++)
            {
                if (grid[winCombination[gridIndex][0]] === X_PLAYER &&
                    grid[winCombination[gridIndex][1]] === X_PLAYER &&
                    grid[winCombination[gridIndex][2]] === X_PLAYER ){
                        setgameFinished(true);
                        setWinCount({...winCount, X:winCount.X + 1});
                        console.log("X wins");
                        return;
                    }
            }

            // check for winning of O
            for(let gridIndex = 0; gridIndex < 8;gridIndex++)
            {
                if (grid[winCombination[gridIndex][0]] === O_PLAYER &&
                    grid[winCombination[gridIndex][1]] === O_PLAYER &&
                    grid[winCombination[gridIndex][2]] === O_PLAYER ){
                        setgameFinished(true);
                        setWinCount({...winCount, O:winCount.O + 1});

                        console.log("O wins");
                        return;
                    }
            }

            // check for game draw
            if(!grid.includes(INITIAL)){
                setDraw(true);
                setgameFinished(true);
                console.log("draw");
            }
        }
    }
    isGameOver();

    function restartGame() {
        setGrid(Array(9).fill(INITIAL));
        setgameFinished(false);
        setDraw(false);
    }

    const handleClick = (id) => {
        setGrid(
            grid.map((item, index) => {
                if(index === id){
                    if(player){
                        return X_PLAYER;
                    }
                    else{
                        return O_PLAYER;
                    }
                } 
                else {
                    return item;
                }
            })
        )
        setPlayer(!player);
    }

    return ( <div>
        {gameFinished && <EndGame winCount = {winCount} restartGame = {restartGame} player = {player} draw = {draw}/>}
        <Square clickedArray = {grid}handleClick = {handleClick}/> 
        </div>
    );
};

export default TicTacToe;