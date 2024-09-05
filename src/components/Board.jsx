import React from "react";
import Cell from "./Cell";
function Board({ squares, onClick, colors }) {
  function renderCell(i) {
    return (
      <Cell
        value={squares[i]}
        onClick={() => onClick(i)}
        className={colors[i]} // teal or yellow depending on the winning combo
      />
    );
  }

  return (
    <div className="board">
      <div className="board-row">
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </div>
      <div className="board-row">
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </div>
      <div className="board-row">
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    </div>
  );
}

export default Board;
