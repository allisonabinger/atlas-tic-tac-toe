// Empty Squares for Board
import React from "react";
import mascotX from "../assets/mascot.png";
import mascotO from "../assets/mascot-blue.png";

function Cell({ value, onClick, className }) {
  return (
    <div className="board-cell" onClick={onClick}>
        {value === "X" && <img src={mascotX} alt="X" className="token" />}
        {value === "O" && <img src={mascotO} alt="O" className="token" />}
    </div>
  );
}

export default Cell;
