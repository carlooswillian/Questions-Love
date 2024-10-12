let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

// Array de perguntas
const questions = [
    {
        question: "Qual é a data do nosso primeiro beijo?",
        answers: ["29/09/2022", "26/09/2022"],
        correctAnswer: 0,
        image: "imagem1.jpg" // Substitua pelo nome real do arquivo
    },
    {
        question: "Qual meu fast food favorito?",
        answers: ["Hambúrguer", "Pizza"],
        correctAnswer: 1,
        image: "imagem2.jpg" // Substitua pelo nome real do arquivo
    },
    {
        question: "Qual minha cor favorita?",
        answers: ["Verde", "Azul"],
        correctAnswer: 1,
        image: "imagem3.jpg" // Substitua pelo nome real do arquivo
    },
    {
        question: "Qual meu esporte favorito?",
        answers: ["Futebol", "Musculação"],
        correctAnswer: 0,
        image: "imagem4.jpg" // Substitua pelo nome real do arquivo
    },
    {
        question: "Pra onde foi nossa primeira viagem?",
        answers: ["Búzios", "Rio de Janeiro"],
        correctAnswer: 0,
        image: "imagem5.jpg" // Substitua pelo nome real do arquivo
    },
    {
        question: "Quantas cidades já conhecemos juntos?",
        answers: ["10", "8"],
        correctAnswer: 0,
        image: "imagem6.jpg" // Substitua pelo nome real do arquivo
    },
    {
        question: "Onde eu gosto de carinho?",
        answers: ["Cabelo", "Orelha"],
        correctAnswer: 0,
        image: "imagem7.jpg" // Substitua pelo nome real do arquivo
    },
    {
        question: "Qual raiz quadrada de 16?",
        answers: ["4", "8"],
        correctAnswer: 0,
        image: "imagem8.jpg" // Substitua pelo nome real do arquivo
    },
    {
        question: "O que eu acho mais bonito em você?",
        answers: ["Olhos", "Sorriso"],
        correctAnswer: 1,
        image: "imagem9.jpg" // Substitua pelo nome real do arquivo
    },
    {
        question: "Qual destino quero ir?",
        answers: ["Itália", "Japão"],
        correctAnswer: 0,
        image: "imagem10.jpg" // Substitua pelo nome real do arquivo
    }
];

// Função para carregar a pergunta
function loadQuestion() {
    if (currentQuestion >= questions.length) {
        showResult(); // Mostra o resultado quando as perguntas acabam
        return;
    }

    const questionData = questions[currentQuestion];

    // Atualiza a pergunta e respostas
    document.getElementById('question-title').textContent = `Pergunta ${currentQuestion + 1}`;
    document.getElementById('question').textContent = questionData.question;
    document.getElementById('answer1').textContent = questionData.answers[0];
    document.getElementById('answer2').textContent = questionData.answers[1];

    // Limpa a seleção anterior
    document.querySelectorAll('.answer').forEach(button => {
        button.classList.remove('selected'); // Remove a classe 'selected' de todos os botões
    });

    // Atribui os eventos de clique para as alternativas
    document.getElementById('answer1').onclick = () => selectAnswer(0);
    document.getElementById('answer2').onclick = () => selectAnswer(1);

    // Define a imagem de fundo
    document.body.style.backgroundImage = `url(${questionData.image})`;
}

// Função para selecionar uma resposta
function selectAnswer(selectedAnswer) {
    const questionData = questions[currentQuestion];
    
    // Marca o botão selecionado
    document.getElementById(`answer${selectedAnswer + 1}`).classList.add('selected');

    if (selectedAnswer === questionData.correctAnswer) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }

    updateFooter();
    currentQuestion++;
    setTimeout(loadQuestion, 1000); // Delay para mostrar a seleção antes de carregar a próxima pergunta
}

// Função para atualizar o contador de acertos e erros
function updateFooter() {
    document.getElementById('footer').textContent = `Acertos: ${correctAnswers} | Erros: ${wrongAnswers}`;
}

// Função para mostrar o resultado final
function showResult() {
    document.getElementById('game-container').style.display = 'none'; // Oculta o jogo
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block'; // Mostra o container de resultado

    // Verifica se o número de acertos é suficiente
