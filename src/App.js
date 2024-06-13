// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

function App() {
  const [squares, setsquares] = useState(Array(9).fill(""));
  const [xturn, setXturn] = useState(true);
  const [stat, Setstat] = useState(null);

  function gameresult() {
    const winningpattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningpattern.length; i++) {
      const [x, y, z] = winningpattern[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[y] === squares[z]
      ) {
        if (squares[x] === "X") {
          return "X";
        }

        return "O";
      }
    }
    return null;
  }
  function handleclick(currentsquare) {
    console.log(currentsquare);
    const copysquare = [...squares];
    if (gameresult() || copysquare[currentsquare]) {
      return;
    } else {
      if (xturn) {
        copysquare[currentsquare] = "X";
      } else {
        copysquare[currentsquare] = "O";
      }
      setsquares(copysquare);
      setXturn(!xturn);
    }
  }
  function handleclick1(){
    setsquares(Array(9).fill(""));
    setXturn(true);
    Setstat(null);
  }
  useEffect(() => {
    const winner = gameresult();
    if (winner) {
      Setstat(`${winner} is the winner`);
    } else if (!squares.includes("")) {
      Setstat("Match is Draw");
    }
  }, [squares, xturn]);
  return (
    <div className="App">
      <div className="tic-tac-toe-container">
        <div className="row">
          <Square value={squares[0]} onClick={() => handleclick(0)} />
          <Square value={squares[1]} onClick={() => handleclick(1)} />
          <Square value={squares[2]} onClick={() => handleclick(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onClick={() => handleclick(3)} />
          <Square value={squares[4]} onClick={() => handleclick(4)} />
          <Square value={squares[5]} onClick={() => handleclick(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onClick={() => handleclick(6)} />
          <Square value={squares[7]} onClick={() => handleclick(7)} />
          <Square value={squares[8]} onClick={() => handleclick(8)} />
        </div>
        {stat ? <p className="text-2xl font-bold">{stat}</p> : null}
        <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4" onClick={()=>handleclick1()}>RESTART</button>
      </div>
    </div>
  );
}

export default App;
