const questions = [
    {
        question: "Qual é a data do nosso primeiro beijo?",
        answers: [
            { text: "29/09/2022", correct: true },
            { text: "26/09/2022", correct: false }
        ]
    },
    {
        question: "Qual meu fast food favorito?",
        answers: [
            { text: "Hambúrguer", correct: false },
            { text: "Pizza", correct: true }
        ]
    },
    {
        question: "Qual minha cor favorita?",
        answers: [
            { text: "Verde", correct: false },
            { text: "Azul", correct: true }
        ]
    },
    {
        question: "Qual meu esporte favorito?",
        answers: [
            { text: "Futebol", correct: true },
            { text: "Musculação", correct: false }
        ]
    },
    {
        question: "Pra onde foi nossa primeira viagem?",
        answers: [
            { text: "Búzios", correct: true },
            { text: "Rio de Janeiro", correct: false }
        ]
    },
    {
        question: "Quantas cidades já conhecemos juntos?",
        answers: [
            { text: "10", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Onde eu gosto de carinho?",
        answers: [
            { text: "Cabelo", correct: true },
            { text: "Orelha", correct: false }
        ]
    },
    {
        question: "Qual raiz quadrada de 16?",
        answers: [
            { text: "4", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "O que eu acho mais bonito em você?",
        answers: [
            { text: "Olhos", correct: false },
            { text: "Sorriso", correct: true }
        ]
    },
    {
        question: "Qual destino quero ir?",
        answers: [
            { text: "Itália", correct: true },
            { text: "Japão", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const correctCountElement = document.getElementById("correct-count");
const wrongCountElement = document.getElementById("wrong-count");
const resultPage = document.getElementById("result-page");
const resultMessage = document.getElementById("result-message");
const prizeButton = document.getElementById("prize-button");
const retryButton = document.getElementById("retry-button");
const finalImage = document.getElementById("final-image");

function startGame() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answersElement.innerHTML = '';
    
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answer");
        button.addEventListener("click", () => selectAnswer(answer));
        answersElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    correctCountElement.innerText = correctAnswers;
    wrongCountElement.innerText = wrongAnswers;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResultPage();
    }
}

function showResultPage() {
    resultPage.classList.remove("hidden");
    questionElement.parentElement.classList.add("hidden");
    answersElement.classList.add("hidden");

    if (correctAnswers >= 7) {
        resultMessage.innerText = "Parabéns, você venceu!";
        prizeButton.classList.remove("hidden");
        prizeButton.addEventListener("click", function () {
            finalImage.classList.remove("hidden");
            finalImage.style.backgroundImage = "url('imagem11.jpg')";
        });
    } else {
        resultMessage.innerText = "Tente novamente!";
        retryButton.classList.remove("hidden");
        retryButton.addEventListener("click", function () {
            location.reload(); // Retorna à primeira pergunta
        });
    }
}

startGame();
