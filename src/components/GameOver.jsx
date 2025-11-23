import React from 'react'
import './GameOver.css'

function GameOver({ score, totalPossible, onReset }) {
  const percentage = Math.round((score / totalPossible) * 100)
  
  let grade = 'F'
  let message = 'Keep practicing!'
  if (percentage >= 90) {
    grade = 'A'
    message = 'Outstanding! You\'re ready for the TSI!'
  } else if (percentage >= 80) {
    grade = 'B'
    message = 'Great job! You\'re well prepared!'
  } else if (percentage >= 70) {
    grade = 'C'
    message = 'Good work! A bit more practice and you\'ll be ready!'
  } else if (percentage >= 60) {
    grade = 'D'
    message = 'Not bad! Keep studying these topics!'
  }

  return (
    <div className="game-over">
      <div className="game-over-content">
        <h1 className="game-over-title">Game Over!</h1>
        <div className="final-score">
          <div className="score-display-large">
            <div className="score-label">Final Score</div>
            <div className="score-amount">${score.toLocaleString()}</div>
          </div>
          <div className="grade-display">
            <div className="grade-label">Grade</div>
            <div className={`grade-letter grade-${grade.toLowerCase()}`}>{grade}</div>
          </div>
        </div>
        <div className="percentage-display">
          {percentage}% Correct
        </div>
        <div className="message-display">
          {message}
        </div>
        <button className="reset-button" onClick={onReset}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default GameOver

