import React from 'react'
import GameCell from './GameCell'
import { pointValues } from '../gameData'
import './GameBoard.css'

function GameBoard({ questions, categories, answeredQuestions, onQuestionClick }) {
  return (
    <div className="game-board">
      <table className="jeopardy-board">
        <thead>
          <tr>
            {categories.map((category, idx) => (
              <th key={idx} className="category-header">
                {category}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pointValues.map((value) => (
            <tr key={value}>
              {categories.map((category) => {
                const question = questions[category]?.find(q => q.value === value)
                const questionId = `${category}-${value}`
                const isAnswered = answeredQuestions.has(questionId)
                
                return (
                  <td key={`${category}-${value}`}>
                    <GameCell
                      value={value}
                      isAnswered={isAnswered}
                      onClick={() => question && onQuestionClick(category, question)}
                    />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GameBoard

