let currentQuestion = 0;
let correctCount = 0;
let wrongCount = 0;

const questions = [
    {
        question: "Qual é a nossa cor favorita?",
        answers: ["Azul", "Verde"],
        correctAnswer: 0
    },
    {
        question: "Qual foi nossa primeira viagem?",
        answers: ["Praia", "Montanha"],
        correctAnswer: 1
    }
    // Adicione mais perguntas aqui
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
