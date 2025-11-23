import React, { useState, useEffect, useRef } from 'react'
import GameBoard from './components/GameBoard'
import QuestionModal from './components/QuestionModal'
import ScoreDisplay from './components/ScoreDisplay'
import GameOver from './components/GameOver'
import { questions, categories } from './gameData'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set())
  const [showAnswer, setShowAnswer] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(60)
  const timerRef = useRef(null)

  const handleQuestionClick = (category, question) => {
    const questionId = `${category}-${question.value}`
    if (answeredQuestions.has(questionId)) {
      return // Question already answered
    }
    setSelectedQuestion({ ...question, category })
    setShowAnswer(false)
    setTimeRemaining(60)
  }

  const handleAnswerReveal = () => {
    setShowAnswer(true)
  }

  const handleQuestionComplete = (correct) => {
    if (correct && !showAnswer) {
      return // Must reveal answer first
    }
    
    const questionId = `${selectedQuestion.category}-${selectedQuestion.value}`
    if (answeredQuestions.has(questionId)) {
      return // Already processed
    }

    const newAnswered = new Set(answeredQuestions)
    newAnswered.add(questionId)
    setAnsweredQuestions(newAnswered)

    if (correct) {
      setScore(score + selectedQuestion.value)
    }

    setSelectedQuestion(null)
    setShowAnswer(false)

    // Check if game is over (all questions answered)
    const totalQuestions = categories.length * 5
    if (newAnswered.size >= totalQuestions) {
      setTimeout(() => setGameOver(true), 500)
    }
  }

  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    // Only run timer if question is selected and answer not revealed
    if (!selectedQuestion || showAnswer) {
      return
    }

    // Reset timer when question opens
    setTimeRemaining(60)

    // Start countdown
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          // Time's up! Auto-complete as wrong
          clearInterval(timerRef.current)
          timerRef.current = null
          
          const questionId = `${selectedQuestion.category}-${selectedQuestion.value}`
          setAnsweredQuestions((prevAnswered) => {
            const newAnswered = new Set(prevAnswered)
            newAnswered.add(questionId)
            
            // Check if game is over
            const totalQuestions = categories.length * 5
            if (newAnswered.size >= totalQuestions) {
              setTimeout(() => setGameOver(true), 500)
            }
            
            return newAnswered
          })
          
          setSelectedQuestion(null)
          setShowAnswer(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Cleanup on unmount or when dependencies change
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [selectedQuestion, showAnswer])

  const resetGame = () => {
    setScore(0)
    setSelectedQuestion(null)
    setAnsweredQuestions(new Set())
    setShowAnswer(false)
    setGameOver(false)
    setTimeRemaining(60)
  }

  if (gameOver) {
    return <GameOver score={score} totalPossible={categories.length * 5 * 500} onReset={resetGame} />
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1 className="game-title">TSI Quiz Show</h1>
        <ScoreDisplay score={score} />
      </div>
      <GameBoard
        questions={questions}
        categories={categories}
        answeredQuestions={answeredQuestions}
        onQuestionClick={handleQuestionClick}
      />
      {selectedQuestion && (
        <QuestionModal
          question={selectedQuestion}
          showAnswer={showAnswer}
          timeRemaining={timeRemaining}
          onRevealAnswer={handleAnswerReveal}
          onComplete={handleQuestionComplete}
          onClose={() => {
            setSelectedQuestion(null)
            setShowAnswer(false)
            setTimeRemaining(60)
          }}
        />
      )}
    </div>
  )
}

export default App

