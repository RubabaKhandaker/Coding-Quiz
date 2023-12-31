// Quiz questions
var Questions = [
    
{
    question: "Commonly used data types DO NOT include:",
    answers: [{ text: "Strings", correct: false },
    { text: "Booleans", correct: false },
    { text: "Alerts", correct: true },
    { text: "Numbers", correct: false }
    ]
 
},
{
    question: "The condition in an if/else statement is enclosed with ______.",
    answers: [{ text: "Quotes", correct: false, },
    { text: "Curly Brackets", correct: false },
    { text: "Parenthesis", correct: true },
    { text: "Square Brackets", correct: false }
    ]
 
},
{
    question: "Arrays in JavaScript can be used to store ______.",
    answers: [{ text: "Numbers and Strings", correct: false },
    { text: "Other Arrays", correct: false },
    { text: "Booleans", correct: false },
    { text: "All of The Above", correct: true }
    ]
 
},
{

    question: "String values must be enclosed within ______ when being assigned to variables.",
    answers: [{ text: "Commas", correct: false },
    { text: "Curly Brackets", correct: false },
    { text: "Quotes", correct: true },
    { text: "Parenthesis", correct: false }
    ]

},
{

    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [{ text: "JavaScript", correct: true },
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

// Function to save quiz score
function scoreSave() {
    clearInterval(timerID);
    timerIDEl.textContent = "Time left: " + countdown;
    setTimeout(function () {
        questionsIDEl.classList.add("hidden");
        document.getElementById("scoresID").classList.remove("hidden");
        document.getElementById("playerScoreID").textContent = "You scored " + countdown + " points!";

    }, 2000)
};

// Function for timer to countdown
function timeCount() {
    countdown--;
    timerIDEl.textContent = "Time: " + countdown;
    if (countdown <= 0) {
        scoreSave();
    }
}

// Function to reset the state of page when moving questions
function pageReset() {
    nextButtonID.classList.add("hidden")
    answerCheckIDEl.classList.add("hidden")
    while (answerButtonsIDEl.firstChild) {
        answerButtonsIDEl.removeChild
            (answerButtonsIDEl.firstChild)
    }
};

// Function to remove button colours
function clearAnswerClass(element) {
    element.classList.remove("right");
    element.classList.remove("wrong");
};

// Function to show correct answer by setting button colours
function answerClass(element, correct) {
    clearAnswerClass(element)
    if (correct) {
        element.classList.add("right");
    } else {
        element.classList.add("wrong");
    }
};

// Function to select answers in quiz
function answerSelect(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    answerCheckIDEl.classList.remove("hidden")

    // If checks whether the chosen answer is right or wrong, then shows text accordingly
    if (correct) {
        answerCheckIDEl.innerHTML = "That's right!";
    } else {
        answerCheckIDEl.innerHTML = "Boo, you'll get it next time!";
        if (countdown <= 10) {
            countdown = 0;
        } else {
            // If the chosen answer is wrong, time deducted from countdown by 10 seconds
            countdown -= 10;
        }
    }

    Array.from(answerButtonsIDEl.children).forEach(button => {
        answerClass(button, button.dataset.correct)
    })

    if (randomQuestion.length > presentQuestion + 1) {
        nextButtonID.classList.remove("hidden")
        answerCheckIDEl.classList.remove("hidden")
    } else {
        startButtonID.classList.remove("hidden")
        scoreSave();
    }
};

// Function used to display question on page
function questionDisplay(Questions) {
    questionsEl.innerText = Questions.Questions
    Questions.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")                                        // risk
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", answerSelect)
        answerButtonsIDEl.appendChild(button)
    })
};

// Function to move on to next question
function moveNextQuest() {
    pageReset();
    questionDisplay(randomQuestion[presentQuestion]);
};

// Function to start the quiz
function startQuiz() {
    timerID = setInterval(timeCount, 1000);
    startingPageIDEl.classList.add("hidden");
    randomQuestion = questions.sort(() => Math.random() - .5)
    presentQuestion = 0
    questionsIDEl.classList.remove("hidden");

    // For timer to start when quiz begins
    timeCount();
    moveNextQuest();
};

// Function to make the start button trigger the first question and next button to display
startButtonID.addEventListener("click", startQuiz);
nextButtonID.addEventListener("click", () => {
    presentQuestion++
    moveNextQuest()
});


var loadScores = function () {
    // Function to load scores from local storage

    if (!savedScores) {
        return false;
    }

    // Following code converts scores from the string field format into an array
    savedScores = JSON.parse(savedScores);
    var initials = document.querySelector("#initialsBoxID").value;
    var latestScore = {
        score: countdown,
        initials: initials
    }
    savedScores.push(latestScore);
    console.log(savedScores)                                               //risk

    savedScores.forEach(score => {
        playerInitials.innerText = score.initials
        playerScores.innerText = score.score
    })
};


// Function to display high scores
function displayHighScores(initials) {
    document.getElementById("highscoresListID").classList.remove("hidden")              //risk
    document.getElementById("scoresID").classList.add("hidden");
    startingPageIDEl.classList.add("hidden");
    questionsIDEl.classList.add("hidden");
    if (typeof initials == "string") {
        var theScore = {
            initials, countdown
        }
        scores.push(theScore)
    }

    var highScoreEl = document.getElementById("highscoresListID");
    highScoreEl.innerHTML = "";

    for (i = 0; i < scores.length; i++) {
        var divOne = document.createElement("div");
        divOne.setAttribute("class", "name-div");
        divOne.innerText = scores[i].initials;
        var divTwo = document.createElement("div");
        divTwo.setAttribute("class", "score-div");
        divTwo.innerText = scores[i].timeLeft;

        highScoreEl.appendChild(divOne);
        highScoreEl.appendChild(divTwo);
    }

    localStorage.setItem("scores", JSON.stringify(scores));

};


// Event listener to view link to high scores
scoreView.addEventListener("click", displayHighScores);


submitButtonID.addEventListener("click", function (event) {
    event.preventDefault()
    var initials = document.querySelector("#initialsBoxID").value;
    displayHighScores(initials);
});


// Event listener to reload or restart the page
restartButtonID.addEventListener("click", function () {
    window.location.reload();
});


// Event listener to clear items in local storage
clearButtonID.addEventListener("click", function () {
    localStorage.clear();
    document.getElementById("highscoresListID").innerHTML = "";
});