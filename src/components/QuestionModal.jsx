import React, { useState } from 'react'
import './QuestionModal.css'

function QuestionModal({ question, showAnswer, timeRemaining, onRevealAnswer, onComplete, onClose }) {
  const [userAnswer, setUserAnswer] = useState('')

  const handleSubmit = (correct) => {
    onComplete(correct)
    setUserAnswer('')
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-category">{question.category}</h2>
          <div className={`timer ${timeRemaining <= 15 ? 'timer-warning' : ''} ${timeRemaining === 0 ? 'timer-expired' : ''}`}>
            ⏱️ {timeRemaining}s
          </div>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="question-info">
            <div className="question-value">Value: ${question.value}</div>
            {question.problemType && (
              <div className="problem-type">Problem Type: <strong>{question.problemType}</strong></div>
            )}
          </div>
          
          <div className="question-text">{question.question}</div>

          {!showAnswer ? (
            <div className="question-actions">
              <input
                type="text"
                className="answer-input"
                placeholder="Your answer..."
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && userAnswer.trim()) {
                    onRevealAnswer()
                  }
                }}
                autoFocus
              />
              <button 
                className="reveal-button"
                onClick={onRevealAnswer}
                disabled={!userAnswer.trim()}
              >
                Reveal Answer
              </button>
            </div>
          ) : (
            <div className="answer-section">
              <div className="correct-answer">
                <strong>Correct Answer:</strong> {question.answer}
              </div>
              <div className="explanation">
                <strong>Explanation:</strong> {question.explanation}
              </div>
              <div className="comparison">
                <div className="your-answer">
                  <strong>Your Answer:</strong> {userAnswer || '(No answer provided)'}
                </div>
                <div className="answer-feedback">
                  {userAnswer.trim().toLowerCase() === question.answer.toLowerCase() 
                    ? '✅ Correct!' 
                    : '❌ Incorrect'}
                </div>
              </div>
              <div className="answer-actions">
                <button 
                  className="correct-button"
                  onClick={() => handleSubmit(true)}
                >
                  ✓ I Got It Right
                </button>
                <button 
                  className="incorrect-button"
                  onClick={() => handleSubmit(false)}
                >
                  ✗ I Got It Wrong
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuestionModal

