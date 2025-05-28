import { useState } from 'react'
import './App.css'
import Square from './Square.jsx'

function App() {
  const Turn={X: 'X',O: 'O'  }
  const [turn, setTurn] = useState(Turn.X);
  const [message, setMessage] = useState('Turno '+Turn.X);
  const [board, setBoard] = useState(Array(9).fill(null));

  const [endGame, setEndGame] = useState(false);

  function handleClick(i) { 

    if (endGame) return;

    if (board[i]) return;

    let newBoard = [...board];
    newBoard[i] = turn;
    setBoard(newBoard);

    if (isWinner(i,newBoard)) {
      setMessage(`Ganador ${turn} 🏆🏆`);
      setEndGame(true);
    }else if (empate(newBoard)) {
      setMessage('Empate 🤝');
      setEndGame(true);
    }
    else {
      let newTurn = turn === Turn.X ? Turn.O : Turn.X;    
      setTurn(newTurn);
      setMessage('Turno ' + newTurn);
    }
  }

  function isWinner(i,newBoard){    
    const lineWinner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    let idxBoxSel=newBoard.map((value, i) => value === turn ? i : null).filter((i) => i !== null);
    if (idxBoxSel.length <3 ) return;    

    return lineWinner.filter((line) => line.includes(i))
    .some(([a,b,c]) => idxBoxSel.includes(a) && idxBoxSel.includes(b) && idxBoxSel.includes(c));
  }

  function empate(newBoard) {
    return newBoard.every((value) => value !== null) 
  }

  function restart() {
    setTurn('X');
    setMessage('Turno X');
    setBoard(Array(9).fill(null));
    setEndGame(false);
  }


  return (
    <main className="App">
      <h1>{message}</h1>
      {endGame && <button className='restart' onClick={restart}> Reiniciar Juego 🔄</button>} 
      <div className="board">
        { board.map((value, i) => (
          <Square
            key={i}
            value={value}
            handleClick={handleClick}
            i={i}
          />
        ))}
      </div>
    </main>
  )
}

export default App
