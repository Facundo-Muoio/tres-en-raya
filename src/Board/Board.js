import React, {useState} from "react";
import Square from "../Square/Square.js";

function Board(){
    const [squares, setSquares ] = useState(new Array(9).fill(null))
    function handleSquareClick(index){
        const nextSquares = [...squares]
        nextSquares[index] = "X"
        setSquares(nextSquares)
    }

    return(
        <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)}/>
    </div>
    </>
    )
}

export default Board