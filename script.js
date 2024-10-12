let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

const questions = [
    {
        question: "Qual é a data do nosso primeiro beijo?",
        options: ["29/09/2022", "26/09/2022"],
        correctAnswer: 0
    },
    {
        question: "Qual meu fast food favorito?",
        options: ["Hambúrguer", "Pizza"],
        correctAnswer: 1
    },
    {
        question: "Qual minha cor favorita?",
        options: ["Verde", "Azul"],
        correctAnswer: 1
    },
    {
        question: "Qual meu esporte favorito?",
        options: ["Futebol", "Musculação"],
        correctAnswer: 0
    },
    {
        question: "Pra onde foi nossa primeira viagem?",
        options: ["Búzios", "Rio de Janeiro"],
        correctAnswer: 0
    },
    {
        question: "Quantas cidades já conhecemos juntos?",
        options: ["10", "8"],
        correctAnswer: 0
    },
    {
        question: "Onde eu gosto de carinho?",
        options: ["Cabelo", "Orelha"],
        correctAnswer: 0
    },
    {
        question: "Qual raiz quadrada de 16?",
        options: ["4", "8"],
        correctAnswer: 0
    },
    {
        question: "O que eu acho mais bonito em você?",
        options: ["Olhos", "Sorriso"],
        correctAnswer: 1
    },
    {
        question: "Qual destino quero ir?",
        options: ["Itália", "Japão"],
        correctAnswer: 0
    }
];

const questionElement = document.getElementById("question");
const buttons = Array.from(document.getElementsByClassName("answer-button"));
const footerElement = document.getElementById("footer");
const resultContainer = document.getElementById("result-container");
const resultMessage = document.getElementById("result-message");
const resultButton = document.getElementById("result-button");
const finalModal = document.getElementById("final-modal");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    buttons.forEach((button, index) => {
        button.textContent = current.options[index];
        button.onclick = () => handleAnswer(index);
    });

    // Atualizar imagem de fundo
    document.body.style.backgroundImage = `url('imagem${currentQuestion + 1}.jpg')`;
}

function handleAnswer(selectedIndex) {
    const current = questions[currentQuestion];
    if (selectedIndex === current.correctAnswer) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    updateFooter();
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function updateFooter() {
    footerElement.textContent = `Acertos: ${correctAnswers} | Erros: ${wrongAnswers}`;
}

function showResult() {
    resultContainer.classList.remove("hidden");
    if (correctAnswers >= 7) {
        resultMessage.textContent = "Parabéns, você venceu!";
        resultButton.textContent = "Pegue o seu prêmio 🎁";
        resultButton.onclick = showFinalModal;
    } else {
        resultMessage.textContent = "Tente novamente!";
        resultButton.textContent = "Voltar ao início";
        resultButton.onclick = resetGame;
    }
}

function showFinalModal() {
    finalModal.style.display = "flex";
    document.getElementById("modal-content").innerHTML = `
        <img src="imagem11.jpg" alt="Prêmio">
        <button id="close-modal" onclick="closeModal()">Fechar</button>
    `;
}

function closeModal() {
    finalModal.style.display = "none";
}

function resetGame() {
    currentQuestion = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    resultContainer.classList.add("hidden");
    loadQuestion();
    updateFooter();
}

// Carregar a primeira pergunta
loadQuestion();
updateFooter();
