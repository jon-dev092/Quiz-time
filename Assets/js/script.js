// Global Variables
var startBtn = document.querySelector("#jumbo-btn");
var submitBtn = document.querySelector('submit-btn')
var startEl = document.querySelector(".start-container");
var quizEl = document.querySelector('.quiz-container');
var highscoreEl = document.querySelector('.highscore-container');
var scoreEl = document.querySelector('.score');
var endEl = document.querySelector('.quiz-end');
var body = document.querySelector('.body')
var quizScore = document.querySelector('.quiz-score');
var playerName = document.querySelector('#player-name');
var questionNumber = document.querySelector(".question-number");
var questionEl = document.querySelector(".question");
var questionCount = 0;
var currentScore = 100;

// quiz questions
var quizQuestions = [
    {
        question: 'How to stop an interval timer in Javascript?', 
        a: 'clearTimer',
        b: 'clearInterval',
        c: 'intervalOver',
        d: 'None of the above',
        answer: 'b'
    }, 
    {
        question: 'How can a datatype be declared to be a constant type?',
        a: 'var',
        b: 'let',
        c: 'const',
        d: 'constant',
        answer: 'c'
    },
    {
        question: 'How are objects compared when they are checked with the strict equality operator?',
        a: 'The content of the objects are compared',
        b: 'The data types of the objects are compared',
        c: 'Their references are compared',
        d: 'Both A and B',
        answer: 'c'
    },
    {
        question: 'Which are data types"?',
        a: 'undefined',
        b: 'number',
        c: 'boolean',
        d: 'all the above',
        answer: 'd'
    },
    {
        question: 'Which of the following are closures in Javascript',
        a: 'Variables',
        b: 'Functions',
        c: 'Objects',
        d: 'All of the above',
        answer: 'd'
    }
]


endEl.remove();
highscoreEl.remove();


// starts timer upon startQuiz
function quizTimer() {
    scoreEl.textContent = "Current score: 100";

    var scoreInterval = setInterval(function() {
        if (currentScore > 0 && questionCount < quizQuestions.length) {
            scoreEl.textContent = "Current score: " + currentScore;
            currentScore--
        }
        else {
            clearInterval(scoreInterval);
            endQuiz();
        }
    }, 850);
}


// begins quiz after event
function startQuiz() { 
    if (startBtn) {
        document.querySelector('.start-container').remove();
        nextQuizQuest(questionCount);
        quizTimer();
    }
}

// gives questions a value
function nextQuizQuest(i) {
    var btnA = document.getElementById("btn-1");
    var btnB = document.getElementById("btn-2");
    var btnC = document.getElementById("btn-3");
    var btnD = document.getElementById("btn-4");

    questionNumber.textContent = ("Question ") + (i + 1)
    questionEl.textContent = quizQuestions[i].question;
    btnA.textContent = quizQuestions[i].a;
    btnB.textContent = quizQuestions[i].b;
    btnC.textContent = quizQuestions[i].c;
    btnD.textContent = quizQuestions[i].d;

    btnA.addEventListener("click", selectAnswer);
    btnB.addEventListener("click", selectAnswer);
    btnC.addEventListener("click", selectAnswer);
    btnD.addEventListener("click", selectAnswer);
}

// allows quiz to continue
var selectAnswer = function(event) {
    var clickedBtn = event.target.getAttribute("value");

    if (clickedBtn === quizQuestions[questionCount].answer) {
        alert('Correct!');
    } else if (currentScore >= 25) {
        currentScore -= 25;
        scoreEl.textContent = "Current score: " + currentScore;
        alert('Incorrect')
    } 

    if (currentScore <= 25) {
        endQuiz();
    }
 
    questionCount++

    if (questionCount < quizQuestions.length) {        
        nextQuizQuest(questionCount);
    }
    else {
        endQuiz();
    }
}

function endQuiz() {
    quizEl.remove();
    scoreEl.remove();
    body.appendChild(endEl);
    body.appendChild(highscoreEl);
    quizScore.textContent = currentScore;
    return quizTimer;
}


startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', function() {
    var name 
    name.textContent = playerName.value;

});



