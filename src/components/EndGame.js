import React from 'react';

const EndGame = ({winCount, restartGame, player, draw}) => {
    return (
        <div className='end-game-screen'>
            {!draw && <span className='win-text'>{player ? "O-wins" : "X-wins"}</span>}
            {draw && <span className='win-text'>Game Draw</span>}
            <span className='win-history'>
                X's wins: {winCount.X}
                <br />
                O's Wins: {winCount.O}
            </span>
            <button className='btn' onClick={restartGame}>Restart Game</button>
            {/* <button className='btn' onClick={restartGame}>Restart Game</button> */}
        </div>
    );
};

export default EndGame;