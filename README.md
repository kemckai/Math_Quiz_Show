# TSI Quiz Show 🎯

A Jeopardy-style quiz game designed to help you prepare for the TSI (Texas Success Initiative) Assessment. Test your knowledge across all four main TSI subject areas with increasing difficulty levels and timer pressure to simulate real test conditions.

🌐 **Play Online:** [View Live Game](https://kemckai.github.io/Math_Quiz_Show/)

## Features

- **Jeopardy-Style Game Board**: Choose questions by category and point value
- **Four TSI Categories**:
  - Elementary Algebra & Functions
  - Intermediate Algebra & Functions
  - Geometry & Measurement
  - Data Analysis, Statistics & Probability
- **Point Values**: $100-$500 based on difficulty
- **Timer Pressure**: 1-minute countdown for each question (with 15-second warning)
- **Problem Type Labels**: Each question shows the type of math problem (e.g., "Linear Equation", "Quadratic Formula")
- **Score Tracking**: Track your progress as you play
- **Detailed Explanations**: Learn from each answer with step-by-step explanations
- **Game Over Screen**: See your final grade and performance

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build

```bash
npm run build
```

## How to Play

1. Select a question by clicking on a dollar amount in the category you want
2. Read the question and type your answer
3. Click "Reveal Answer" to see the correct answer and explanation
4. Compare your answer and mark whether you got it right or wrong
5. Earn points for correct answers
6. Complete all questions to see your final score and grade!

## Game Rules

- Each question has a 1-minute (60-second) timer
- Timer warning appears when 15 seconds remain
- Once a question is answered, it's removed from the board
- Points are based on difficulty: $100 (easy) to $500 (hard)
- Be honest about whether you got it right - this helps you track your progress!

## Deployment

This game is automatically deployed to GitHub Pages via GitHub Actions. Every push to the `main` branch triggers a new deployment.

Good luck with your TSI assessment! 🎓

