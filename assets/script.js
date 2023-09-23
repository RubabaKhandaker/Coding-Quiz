// Quiz questions
var Questions = [
    
{
    q: "Commonly used data types DO NOT include:",
    a: [{ text: "Strings", correct: false },
    { text: "Booleans", correct: false },
    { text: "Alerts", correct: true },
    { text: "Numbers", correct: false }
    ]
 
},
{
    q: "The condition in an if/else statement is enclosed with ______.",
    a: [{ text: "Quotes", correct: false, },
    { text: "Curly Brackets", correct: false },
    { text: "Parenthesis", correct: true },
    { text: "Square Brackets", correct: false }
    ]
 
},
{
    q: "Arrays in JavaScript can be used to store ______.",
    a: [{ text: "Numbers and Strings", correct: false },
    { text: "Other Arrays", correct: false },
    { text: "Booleans", correct: false },
    { text: "All of The Above", correct: true }
    ]
 
},
{

    q: "String values must be enclosed within ______ when being assigned to variables.",
    a: [{ text: "Commas", correct: false },
    { text: "Curly Brackets", correct: false },
    { text: "Quotes", correct: true },
    { text: "Parenthesis", correct: false }
    ]

},
{

    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: [{ text: "JavaScript", correct: true },
    { text: "Terminal/Bash", correct: false },
    { text: "for Loops", correct: false },
    { text: "console.log", correct: false }
    ]

}
 
]


// var to refrence objects with specified Id's in HTML

var countdown = 75;
var timerID;
var timerIDEl = document.getElementById("timerID");
var startButtonID = document.getElementById("startBtnID");
var nextButton = document.getElementById("nextButtonID");
var questionsIDEl = document.getElementById("questionsID");
var startingPageIDEl = document.getElementById("startingPageID");
var questionsEl = document.getElementById("questions");
var answerButtonsIDEl = document.getElementById("answerButtonsID");
var answerCheckIDEl = document.getElementById("answerCheckID");
var submitButtonID = document.getElementById("submitButtonID");
var clearButtonID = document.getElementById("clearButtonID");
var restartButtonID = document.getElementById("restartButtonID");
var playerScores = document.getElementById("player-score");
var scoreView = document.getElementById("highscores-link");
var playerInitials = document.getElementById("player-name");
var scores = JSON.parse(localStorage.getItem("scores")) || [];

var randomQuestion, presentQuestion;


