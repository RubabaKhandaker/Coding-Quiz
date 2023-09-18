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
    a: [{ text: "Quotes", isCorrect: false, },
    { text: "Curly Brackets", isCorrect: false },
    { text: "Parenthesis", isCorrect: true },
    { text: "Square Brackets", isCorrect: false }
    ]
 
},
{
    q: "Arrays in JavaScript can be used to store ______.",
    a: [{ text: "Numbers and Strings", isCorrect: false },
    { text: "Other Arrays", isCorrect: false },
    { text: "Booleans", isCorrect: false },
    { text: "All of The Above", isCorrect: true }
    ]
 
},
{

    q: "String values must be enclosed within ______ when being assigned to variables.",
    a: [{ text: "Commas", isCorrect: false },
    { text: "Curly Brackets", isCorrect: false },
    { text: "Quotes", isCorrect: true },
    { text: "Parenthesis", isCorrect: false }
    ]

},
{

    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: [{ text: "JavaScript", isCorrect: true },
    { text: "Terminal/Bash", isCorrect: false },
    { text: "for Loops", isCorrect: false },
    { text: "console.log", isCorrect: false }
    ]

}
 
]

// Loads questions on to webpage
function loadQuestion() {
    var question = document.getElementById("questID")
    var option = document.getElementById("optID")
 
    question.textContent = Questions[currentQuest].q;
    option.innerHTML = ""
 
    for (let i = 0; 
         i < Questions[currentQuest].a.length;
         i++) {

        var choicesDiv = document.createElement("div");
        var choices = document.createElement("input");
        var choicesLabel = document.createElement("label");
 
        choices.type = "radio";
        choices.name = "answer";
        choices.value = i;
 
        choicesLabel.textContent = Questions[currentQuest].a[i].text;
 
        choicesDiv.appendChild(choices);
        choicesDiv.appendChild(choicesLabel);
        option.appendChild(choicesDiv);
    }
}
 
loadQuestion();