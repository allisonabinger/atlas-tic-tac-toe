// Board Component
import Square from "./Square.jsx";
import { useState } from "react";
import { calculateBoardState } from "../util.ts";
import mascotX from "../assets/mascot.png";
import mascotO from "../assets/mascot-blue.png";

function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const boardState = calculateBoardState(square);

  const handleClick = (i) => {
    if (boardState.winner || square[i]) {
      return;
    }

    const nextSquare = square.slice();
    nextSquare[i] = xIsNext ? mascotX : mascotO;
    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="board">
      {[0, 3, 6].map((rowStart) => (
        <div className="board-row" key={rowStart}>
          {[0, 1, 2].map((column) => (
            <Square
              key={rowStart + column}
              value={square[rowStart + column]}
              onClick={() => handleClick(rowStart + column)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
