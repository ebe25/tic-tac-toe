import React from "react";
import "../App.css";
import {useState} from "react";

const Square = ({value, onSqaureClick}) => {
  return (
    <button className="square" onClick={onSqaureClick}>
      {value}
    </button>
  );
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXnext, setIsXnext] = useState(true);

  const handleClick = (i) => {
    if(squares[i] || handleWinner(squares)){ //if winner is handled and square cell has something
        return;
    }

    const nextSqaures = squares.slice();
    if(isXnext){
        nextSqaures[i]="X";
    }else{
        nextSqaures[i]="O";
    }
    setSquares(nextSqaures);
    setIsXnext(!isXnext);
  };

  //game over logic and display text
  const winner=handleWinner(squares);
  let status; //winner status
  if(winner){
    status=`Winner: ${winner}`;
  }else{
    status=`Next player: ${isXnext?"X":"O"}`
  }

  return (
    <>
      
        <div className="board"> 
      <div className="board-row">
        <Square
          value={squares[0]}
          onSqaureClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onSqaureClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onSqaureClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSqaureClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onSqaureClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onSqaureClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSqaureClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onSqaureClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onSqaureClick={() => {
            handleClick(8);
          }}
        />
      </div>
      </div>
     
      <div className="status">{status}</div>  

  
    </>
  );
};

export default Board


const handleWinner=(squares)=>{
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
}
