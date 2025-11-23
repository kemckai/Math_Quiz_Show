import React from 'react'
import './GameCell.css'

function GameCell({ value, isAnswered, onClick }) {
  return (
    <button
      className={`game-cell ${isAnswered ? 'answered' : ''}`}
      onClick={onClick}
      disabled={isAnswered}
    >
      {isAnswered ? '' : `$${value}`}
    </button>
  )
}

export default GameCell

