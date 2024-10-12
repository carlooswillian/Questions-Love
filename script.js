let currentQuestion = 0;
let correctCount = 0;
let wrongCount = 0;

const questions = [
    {
        question: "Qual é a data do nosso primeiro beijo?",
        answers: ["29/09/2022", "26/09/2022"],
        correctAnswer: 0,
        image: "imagem1.jpg"
    },
    {
        question: "Qual meu fast food favorito?",
        answers: ["Hambúrguer", "Pizza"],
        correctAnswer: 1,
        image: "imagem2.jpg"
    },
    {
        question: "Qual minha cor favorita?",
        answers: ["Verde", "Azul"],
        correctAnswer: 1,
        image: "imagem3.jpg"
    },
    {
        question: "Qual meu esporte favorito?",
        answers: ["Futebol", "Musculação"],
        correctAnswer: 0,
        image: "imagem4.jpg"
    },
    {
        question: "Pra onde foi nossa primeira viagem?",
        answers: ["Búzios", "Rio de Janeiro"],
        correctAnswer: 0,
        image: "imagem5.jpg"
    },
    {
        question: "Quantas cidades já conhecemos juntos?",
        answers: ["10", "8"],
        correctAnswer: 0,
        image: "imagem6.jpg"
    },
    {
        question: "Onde eu gosto de carinho?",
        answers: ["Cabelo", "Orelha"],
        correctAnswer: 0,
        image: "imagem7.jpg"
    },
    {
        question: "Qual raiz quadrada de 16?",
        answers: ["4", "8"],
        correctAnswer: 0,
        image: "imagem8.jpg"
    },
    {
        question: "O que eu acho mais bonito em você?",
        answers: ["Olhos", "Sorriso"],
        correctAnswer: 1,
        image: "imagem9.jpg"
    },
    {
        question: "Qual destino quero ir?",
        answers: ["Itália", "Japão"],
        correctAnswer: 0,
        image: "imagem10.jpg"
    }
];

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        // Exibe uma mensagem de fim de jogo
        document.getElementById('question-container').innerHTML = '<p>Fim do jogo!</p>';
        return;
    }

    const questionData = questions[currentQuestion];

    // Atualiza o título e a pergunta
    document.getElementById('question-title').textContent = `Pergunta ${currentQuestion + 1}`;
    document.getElementById('question').textContent = questionData.question;

    // Atualiza as opções de resposta com base na pergunta atual
    const answer1Button = document.getElementById('answer1');
    const answer2Button = document.getElementById('answer2');

    answer1Button.textContent = questionData.answers[0];
    answer2Button.textContent = questionData.answers[1];

    // Atribui os eventos de clique para as alternativas
    answer1Button.onclick = () => checkAnswer(0);
    answer2Button.onclick = () => checkAnswer(1);

    // Define a imagem de fundo
    document.body.style.backgroundImage = `url(${questionData.image})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
}

function checkAnswer(selectedAnswerIndex) {
    const correctAnswerIndex = questions[currentQuestion].correctAnswer;

    if (selectedAnswerIndex === correctAnswerIndex) {
        correctCount++;
        document.getElementById('correct-count').textContent = correctCount;
    } else {
        wrongCount++;
        document.getElementById('wrong-count').textContent = wrongCount;
    }

    // Carrega a próxima pergunta
    currentQuestion++;
    loadQuestion();
}

window.onload = loadQuestion;
