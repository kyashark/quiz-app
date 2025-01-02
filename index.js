const questions = [
    {
        question: "What is the capital of France?",
        answer: [
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false},
            {text: "Paris", correct: true},
            {text: "Rome", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false},
        ]
    },
    
    {
        question: "What is the largest ocean on Earth?",
        answer: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
            {text: "Arctic Ocean", correct: false},
        ]
    }
];



const startContainer = document.querySelector('.start.container');
const quizContainer = document.querySelector('.quiz.container');
const scoreContainer = document.querySelector('.score.container');

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers')
const NextButton = document.getElementById("next-btn");
const scoreSpan = document.getElementById("score");




let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    startContainer.style.display="none";
    quizContainer.style.display="block"
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let currentQuestionNo = currentQuestionIndex+1;
    questionElement.innerHTML = currentQuestionNo + ". " + currentQuestion.question;

    answersElement.innerHTML="";
    
    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct = answer.correct;
        button.addEventListener('click', () => selectAnswer(button));
        answersElement.append(button);
    })
}

function selectAnswer(button){
    if(!button.classList.contains('selected')){
        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    }
}

function showNextQuestion(){
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        
    } else {
        showScore();
    }
}

function checkAnswer(){
    const selectedButton = document.querySelector('.answer-btn.selected');
    if (selectedButton && selectedButton.dataset.correct === 'true') {
        score++;
        console.log(score);
    }
}

function showScore(){
    quizContainer.style.display = 'none'; 
    scoreContainer.style.display = 'flex';
    scoreSpan.innerHTML = score;
}

function restartQuiz(){
    startContainer.style.display='flex';
    scoreContainer.style.display='none';
    currentQuestionIndex = 0;
    score = 0;
}

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('next-btn').addEventListener('click',showNextQuestion);
document.getElementById('restart-btn').addEventListener('click',restartQuiz);