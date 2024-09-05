import React, { useState } from "react";
import Board from "../components/Board.jsx";  
import { calculateBoardState } from "../util.ts";

function Game() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = React.useState(true);
  const { winner, colors } = calculateBoardState(squares);

  function handleClick(i) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = isXNext ? "X" : "O";
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div>
      <Board squares={squares} onClick={handleClick} colors={colors} />
      <div>
        <button className="button" onClick={resetGame}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Game;
