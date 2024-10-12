let currentQuestion = 0;
let correctCount = 0;
let wrongCount = 0;

const questions = [
    {
        question: "Qual é a data do nosso primeiro beijo?",
        answers: ["29/09/2022", "26/09/2022"],
        correctAnswer: 0
    },
    {
        question: "Qual meu fast food favorito?",
        answers: ["Hambúrguer", "Pizza"],
        correctAnswer: 1
    },
    {
        question: "Qual minha cor favorita?",
        answers: ["Verde", "Azul"],
        correctAnswer: 1
    },
    {
        question: "Qual meu esporte favorito?",
        answers: ["Futebol", "Musculação"],
        correctAnswer: 0
    },
    {
        question: "Pra onde foi nossa primeira viagem?",
        answers: ["Búzios", "Rio de Janeiro"],
        correctAnswer: 0
    },
    {
        question: "Quantas cidades já conhecemos juntos?",
        answers: ["10", "8"],
        correctAnswer: 0
    },
    {
        question: "Onde eu gosto de carinho?",
        answers: ["Cabelo", "Orelha"],
        correctAnswer: 0
    },
    {
        question: "Qual raiz quadrada de 16?",
        answers: ["4", "8"],
        correctAnswer: 0
    },
    {
        question: "O que eu acho mais bonito em você?",
        answers: ["Olhos", "Sorriso"],
        correctAnswer: 1
    },
    {
        question: "Qual destino quero ir?",
        answers: ["Itália", "Japão"],
        correctAnswer: 0
    }
];

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        // Exibe uma mensagem de fim de jogo
        document.getElementById('question-container').innerHTML = '<p>Fim do jogo!</p>';
        return;
    }

    const questionData = questions[currentQuestion];
    document.getElementById('question-title').textContent = `Pergunta ${currentQuestion + 1}`;
    document.getElementById('question').textContent = questionData.question;

    const buttons = document.querySelectorAll('.answer');
    buttons[0].textContent = questionData.answers[0];
    buttons[1].textContent = questionData.answers[1];
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        correctCount++;
        document.getElementById('correct-count').textContent = correctCount;
    } else {
        wrongCount++;
        document.getElementById('wrong-count').textContent = wrongCount;
    }

    // Exibe a imagem antes de passar para a próxima pergunta
    showImageTransition();
}

function showImageTransition() {
    const imageIndex = currentQuestion + 1;
    const imageSrc = `imagem${imageIndex}.jpg`;
    document.body.style.backgroundImage = `url(${imageSrc})`;
    
    setTimeout(() => {
        currentQuestion++;
        document.body.style.backgroundImage = ''; // Remove a imagem
        loadQuestion(); // Carrega a próxima pergunta
    }, 3000); // 3 segundos de transição
}

window.onload = loadQuestion;
