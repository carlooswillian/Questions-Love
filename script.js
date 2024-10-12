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
let correctCount = 0;
let wrongCount = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-button');
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const resultButton = document.getElementById('result-button');
const finalImage = document.getElementById('final-image');

// Inicia o jogo
function startGame() {
    currentQuestionIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    resultContainer.classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
    document.body.style.backgroundImage = `url('imagem${currentQuestionIndex + 1}.jpg')`; // Define a imagem de fundo para a primeira pergunta
}

// Exibe a pergunta atual
function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.forEach((button, index) => {
        button.innerText = question.answers[index].text;
        button.onclick = () => selectAnswer(question.answers[index]);
    });
}

// Seleciona a resposta
function selectAnswer(answer) {
    if (answer.correct) {
        correctCount++;
    } else {
        wrongCount++;
    }
    correctCountElement.innerText = correctCount;
    wrongCountElement.innerText = wrongCount;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        document.body.style.backgroundImage = `url('imagem${currentQuestionIndex + 1}.jpg')`; // Atualiza a imagem de fundo
    } else {
        showResult();
    }
}

// Exibe o resultado
function showResult() {
    questionElement.classList.add('hidden');
    answerButtons.forEach(button => button.classList.add('hidden'));
    resultContainer.classList.remove('hidden');

    if (correctCount >= 7) {
        resultMessage.innerText = "Parabéns, você venceu!";
        resultButton.innerText = "Pegue o seu prêmio 🎁";
        resultButton.onclick = showFinalImage;
    } else {
        resultMessage.innerText = "Tente novamente!";
        resultButton.innerText = "Recomeçar";
        resultButton.onclick = startGame;
    }
}

// Mostra a imagem final
function showFinalImage() {
    finalImage.style.display = 'block'; // Exibe a imagem
    finalImage.style.backgroundImage = "url('imagem11.jpg')"; // Define a imagem de fundo
    finalImage.classList.remove('hidden'); // Remove a classe hidden
}

// Inicia o jogo ao carregar a página
startGame();
