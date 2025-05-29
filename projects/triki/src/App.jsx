import { useState } from 'react'
import './App.css'
import Square from './Square.jsx'
import confetti from 'canvas-confetti'

function App () {
  const getStorageValue = (key) => window.localStorage.getItem(key) || null
  const Turn = { X: 'X', O: 'O' }
  const [turn, setTurn] = useState(getStorageValue('turn') || Turn.X)
  const [message, setMessage] = useState(getStorageValue('message') || 'Turno ' + Turn.X)
  const [board, setBoard] = useState(JSON.parse(getStorageValue('board')) || Array(9).fill(null))
  const [endGame, setEndGame] = useState(getStorageValue('endGame') || '')

  function handleClick (i) {
    if (endGame) return

    if (board[i]) return

    const newBoard = [...board]
    newBoard[i] = turn
    setBoard(newBoard)
    window.localStorage.setItem('board', JSON.stringify(newBoard))

    let mensaje = ''
    let endGamee = ''

    if (isWinner(i, newBoard)) {
      mensaje = `Ganador ${turn} 🏆🏆`
      endGamee = true
      setMessage(mensaje)
      setEndGame(endGamee)

      confetti()
    } else if (empate(newBoard)) {
      mensaje = 'Empate 🤝'
      endGamee = true
      setMessage(mensaje)
      setEndGame(endGamee)
    } else {
      const newTurn = turn === Turn.X ? Turn.O : Turn.X
      window.localStorage.setItem('turn', newTurn)
      setTurn(newTurn)
      setMessage('Turno ' + newTurn)
    }
    window.localStorage.setItem('message', mensaje)
    window.localStorage.setItem('endGame', endGamee)
  }

  function isWinner (i, newBoard) {
    const lineWinner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    const idxBoxSel = newBoard.map((value, i) => value === turn ? i : null).filter((i) => i !== null)
    if (idxBoxSel.length < 3) return

    return lineWinner.filter((line) => line.includes(i))
      .some(([a, b, c]) => idxBoxSel.includes(a) && idxBoxSel.includes(b) && idxBoxSel.includes(c))
  }

  function empate (newBoard) {
    return newBoard.every((value) => value !== null)
  }

  function restart () {
    setTurn('X')
    setMessage('Turno X')
    setBoard(Array(9).fill(null))
    setEndGame(false)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('message')
    window.localStorage.removeItem('endGame')
  }

  return (
    <main className='App'>
      <h1>{message}</h1>
      {endGame && <button className='restart' onClick={restart}> Reiniciar Juego 🔄</button>}
      <div className='board'>
        {board.map((value, i) => (
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
