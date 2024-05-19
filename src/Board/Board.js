import React, {useState} from "react";
import Square from "../Square/Square.js";

function Board(){
    const [squares, setSquares ] = useState(new Array(9).fill(null))
    function handleSquareClick(){
        const nextSquares = [...squares]
        nextSquares[1] = "X"
        setSquares(nextSquares)
    }

    return(
        <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={handleSquareClick}/>
      <Square value={squares[1]} onSquareClick={handleSquareClick}/>
      <Square value={squares[2]} onSquareClick={handleSquareClick}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={handleSquareClick}/>
      <Square value={squares[4]} onSquareClick={handleSquareClick}/>
      <Square value={squares[5]} onSquareClick={handleSquareClick}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={handleSquareClick}/>
      <Square value={squares[7]} onSquareClick={handleSquareClick}/>
      <Square value={squares[8]} onSquareClick={handleSquareClick}/>
    </div>
    </>
    )
}

export default Board