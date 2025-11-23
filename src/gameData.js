// TSI Quiz Show Game Data
// Categories and questions organized by difficulty (points)

export const categories = [
  "Elementary Algebra & Functions",
  "Intermediate Algebra & Functions",
  "Geometry & Measurement",
  "Data Analysis, Statistics & Probability"
];

export const pointValues = [100, 200, 300, 400, 500]; // Increasing difficulty

export const questions = {
  "Elementary Algebra & Functions": [
    {
      id: 1,
      value: 100,
      problemType: "Linear Equation",
      question: "Solve for x: 2x + 5 = 15",
      answer: "x = 5",
      explanation: "Subtract 5 from both sides: 2x = 10, then divide by 2: x = 5"
    },
    {
      id: 2,
      value: 200,
      problemType: "Linear Inequality",
      question: "Solve the inequality: 3x - 7 < 14",
      answer: "x < 7",
      explanation: "Add 7 to both sides: 3x < 21, then divide by 3: x < 7"
    },
    {
      id: 3,
      value: 300,
      problemType: "System of Linear Equations",
      question: "Solve the system: y = 2x + 1 and y = -x + 7",
      answer: "(2, 5)",
      explanation: "Set equations equal: 2x + 1 = -x + 7, solve: 3x = 6, x = 2, then y = 5"
    },
    {
      id: 4,
      value: 400,
      problemType: "Quadratic Function - Vertex Form",
      question: "Find the vertex of the quadratic function: f(x) = x² - 6x + 8",
      answer: "(3, -1)",
      explanation: "Using x = -b/(2a): x = 6/2 = 3, then f(3) = 9 - 18 + 8 = -1"
    },
    {
      id: 5,
      value: 500,
      problemType: "Function Composition",
      question: "If f(x) = 3x + 2 and g(x) = x² - 1, find f(g(2))",
      answer: "11",
      explanation: "First g(2) = 4 - 1 = 3, then f(3) = 9 + 2 = 11"
    }
  ],
  "Intermediate Algebra & Functions": [
    {
      id: 6,
      value: 100,
      problemType: "Factoring - Difference of Squares",
      question: "Factor: x² - 9",
      answer: "(x + 3)(x - 3)",
      explanation: "Difference of squares: a² - b² = (a + b)(a - b)"
    },
    {
      id: 7,
      value: 200,
      problemType: "Exponent Rules",
      question: "Simplify: (x³ · x⁴) / x²",
      answer: "x⁵",
      explanation: "Add exponents for multiplication: x⁷, subtract for division: x⁷⁻² = x⁵"
    },
    {
      id: 8,
      value: 300,
      problemType: "Simplifying Radicals",
      question: "Simplify: √(48) + √(12)",
      answer: "6√3",
      explanation: "√48 = 4√3, √12 = 2√3, so 4√3 + 2√3 = 6√3"
    },
    {
      id: 9,
      value: 400,
      problemType: "Quadratic Formula",
      question: "Solve: x² - 5x + 6 = 0 using the quadratic formula",
      answer: "x = 2 or x = 3",
      explanation: "x = (5 ± √(25 - 24))/2 = (5 ± 1)/2, so x = 3 or x = 2"
    },
    {
      id: 10,
      value: 500,
      problemType: "Rational Expressions",
      question: "Simplify: (2x² - 8)/(x² - x - 6)",
      answer: "2(x + 2)/(x + 2) or 2 (when x ≠ -2)",
      explanation: "Factor numerator: 2(x² - 4) = 2(x + 2)(x - 2), denominator: (x - 3)(x + 2), cancel (x + 2)"
    }
  ],
  "Geometry & Measurement": [
    {
      id: 11,
      value: 100,
      problemType: "Area - Rectangle",
      question: "Find the area of a rectangle with length 8 cm and width 5 cm",
      answer: "40 cm²",
      explanation: "Area = length × width = 8 × 5 = 40 cm²"
    },
    {
      id: 12,
      value: 200,
      problemType: "Perimeter - Square",
      question: "Find the perimeter of a square with side length 6 inches",
      answer: "24 inches",
      explanation: "Perimeter = 4 × side = 4 × 6 = 24 inches"
    },
    {
      id: 13,
      value: 300,
      problemType: "Volume - Cylinder",
      question: "Find the volume of a cylinder with radius 3 cm and height 10 cm",
      answer: "90π cm³ or approximately 282.74 cm³",
      explanation: "Volume = πr²h = π(3)²(10) = 90π cm³"
    },
    {
      id: 14,
      value: 400,
      problemType: "Coordinate Geometry - Distance Formula",
      question: "Find the distance between points (2, 3) and (5, 7)",
      answer: "5 units",
      explanation: "Distance = √((5-2)² + (7-3)²) = √(9 + 16) = √25 = 5"
    },
    {
      id: 15,
      value: 500,
      problemType: "Transformations - Reflection",
      question: "A point (x, y) is reflected over the y-axis. What are its new coordinates?",
      answer: "(-x, y)",
      explanation: "Reflecting over y-axis changes the x-coordinate sign while y stays the same"
    }
  ],
  "Data Analysis, Statistics & Probability": [
    {
      id: 16,
      value: 100,
      problemType: "Statistics - Mean (Average)",
      question: "Find the mean of: 5, 7, 9, 11, 13",
      answer: "9",
      explanation: "Mean = (5 + 7 + 9 + 11 + 13) / 5 = 45 / 5 = 9"
    },
    {
      id: 17,
      value: 200,
      problemType: "Statistics - Median",
      question: "Find the median of: 3, 7, 9, 12, 15, 18",
      answer: "10.5",
      explanation: "Median = average of middle two values: (9 + 12) / 2 = 10.5"
    },
    {
      id: 18,
      value: 300,
      problemType: "Probability - Basic",
      question: "What is the probability of rolling an even number on a standard die?",
      answer: "1/2 or 0.5",
      explanation: "Even numbers are 2, 4, 6 out of 6 total outcomes: 3/6 = 1/2"
    },
    {
      id: 19,
      value: 400,
      problemType: "Statistics - Mode",
      question: "If a dataset has mode 7 and you add three more 7s, what is the new mode?",
      answer: "7",
      explanation: "Mode is the most frequent value. Adding more 7s increases its frequency, so mode remains 7"
    },
    {
      id: 20,
      value: 500,
      problemType: "Probability - Addition Rule (Union)",
      question: "From a deck of 52 cards, what's the probability of drawing a heart or a king?",
      answer: "16/52 or 4/13",
      explanation: "P(heart) = 13/52, P(king) = 4/52, P(heart and king) = 1/52. P(heart or king) = 13/52 + 4/52 - 1/52 = 16/52"
    }
  ]
};

