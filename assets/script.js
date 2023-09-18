let score = 0 //Stores score
let currentQuest = 0 //Starting question

// Quiz questions
var Questions = [
    
{
    q: "Commonly used data types DO NOT include:",
    a: [{ text: "Strings", isCorrect: false },
    { text: "Booleans", isCorrect: false },
    { text: "Alerts", isCorrect: true },
    { text: "Numbers", isCorrect: false }
    ]
 
},
{
    q: "The condition in an if/else statement is enclosed with ______.",
    a: [{ text: "Quotes", isCorrect: false, isSelected: false },
    { text: "Curly Brackets", isCorrect: false },
    { text: "Parenthesis", isCorrect: false },
    { text: "Square Brackets", isCorrect: true }
    ]
 
},
{
    q: "Arrays in JavaScript can be used to store ______.",
    a: [{ text: "Numbers and Strings", isCorrect: false },
    { text: "Other Arrays", isCorrect: false },
    { text: "Booleans", isCorrect: true },
    { text: "All of The Above", isCorrect: false }
    ]
 
},
{

    q: "String values must be enclosed within ______ when being assigned to variables.",
    a: [{ text: "Commas", isCorrect: false },
    { text: "Curly Brackets", isCorrect: false },
    { text: "Quotes", isCorrect: true },
    { text: "Parenthesis", isCorrect: false }
    ]

}
 
]