import { useState } from "react";
function Square({ value, onSquareClick }) {
  return (
    <button className="square m-4 h-20 bg-red-400 w-20" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xTurn, squares, onPlay }) {
  // let [xTurn, setXTurn] = useState(true);
  // let [squares, setSquares] = useState(Array(9).fill(null));

  function handelClick(i) {
    if (squares[i] || checkWin(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xTurn) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "0";
    }
    onPlay(nextSquares);
  }

  const winner = checkWin(squares);
  let status;
  if (winner) {
    status = `winner is ${winner}`;
  } else {
    status = `next palyer : ${xTurn ? "X" : "0"}`;
  }

  return (
    <>
      <div>{status}</div>
      <div className="">
        <div>
          <Square
            value={squares[0]}
            onSquareClick={() => {
              handelClick(0);
            }}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => {
              handelClick(1);
            }}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => {
              handelClick(2);
            }}
          />
        </div>
        <div>
          <Square
            value={squares[3]}
            onSquareClick={() => {
              handelClick(3);
            }}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => {
              handelClick(4);
            }}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => {
              handelClick(5);
            }}
          />
        </div>
        <div>
          <Square
            value={squares[6]}
            onSquareClick={() => {
              handelClick(6);
            }}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => {
              handelClick(7);
            }}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => {
              handelClick(8);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default function Game() {
  // let [xTurn, setxTurn] = useState(true);
  let [history, setHistory] = useState([Array(9).fill(null)]);
  let [cMove, setcMove] = useState(0);
  let xTurn = cMove % 2 === 0;
  let cSquare = history[cMove];

  function handlePlay(nextSquares) {
    let nextHistory = [...history.slice(0, cMove + 1), nextSquares];
    setHistory(nextHistory);
    setcMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setcMove(nextMove);
  }

  const move = history.map((square, move) => {
    let des;

    if (move > 0) {
      des = `go to ${move}`;
    } else {
      des = ` go to game start`;
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{des}</button>
      </li>
    );
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board xTurn={xTurn} squares={cSquare} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol className="">{move} </ol>
        </div>
      </div>
    </>
  );
}

function checkWin(s) {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < win.length; i++) {
    const [a, b, c] = win[i];
    if (s[a] !== null && s[a] === s[b] && s[a] === s[c]) {
      return s[a];
    }
  }
  return null;
}
