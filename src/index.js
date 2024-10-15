import createQuestion from "./cardQuestion.js";
import questionsToAsk from "./questionsToAsk.js";

const QUESTIONS = document.querySelector(".blockQuestion");
const timerElement = document.getElementById('timer');
let currentQuestionIndex = 0;
let score = 0;
let timer;

// Fonction pour afficher une question
function displayQuestion(index) {
    selectedAnswerId = null;
    QUESTIONS.innerHTML = createQuestion(questionsToAsk[index]);
    startTimer();
    updateProgressBar(index, questionsToAsk.length);
}

// Fonction pour démarrer le timer
function startTimer() {
    let timeLeft = 15;
    timerElement.innerHTML = `
        <img src="../public/images/hourglass.png" alt="Sablier" class="timer-icon">
        <span>${timeLeft}</span>
    `;
    
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerHTML = `
            <img src="../public/images/hourglass.png" alt="Sablier" class="timer-icon">
            <span>${timeLeft}</span>
        `;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// Fonction pour passer à la question suivante
function nextQuestion() {
    clearInterval(timer);
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questionsToAsk.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        showFinalScore();
    }
}

// Fonction pour afficher le score final
function showFinalScore() {
    // Mettre à jour la barre de progression une dernière fois
    updateProgressBar(questionsToAsk.length, questionsToAsk.length);

    QUESTIONS.innerHTML = `
        <h2>Quiz terminé !</h2>
        <p>Votre score : ${score} / ${questionsToAsk.length}</p>
        <button id="restart">Rejouer</button>
    `;
    document.getElementById('restart').addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        updateProgressBar(0, questionsToAsk.length);
        displayQuestion(currentQuestionIndex);
    });
}

// Fonction pour vérifier la réponse
function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    nextQuestion();
}

// Ajout du bouton START
QUESTIONS.innerHTML = '<button id="start">START</button>';
document.getElementById('start').addEventListener('click', () => {
    displayQuestion(currentQuestionIndex);
});

// Initialisation de la barre de progression
updateProgressBar(0, questionsToAsk.length);

// Variable pour stocker la réponse sélectionnée
let selectedAnswerId = null;

// Écouteur d'événements pour les boutons de réponse et le bouton VALIDER
QUESTIONS.addEventListener('click', (e) => {
    if (e.target.classList.contains('answer-btn')) {
        // Réinitialiser tous les boutons
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        // Marquer le bouton cliqué comme sélectionné
        e.target.classList.add('selected');
        selectedAnswerId = e.target.id;
    } else if (e.target.id === 'validate') {
        if (selectedAnswerId) {
            const correctAnswer = questionsToAsk[currentQuestionIndex].lienValider.slice(1);
            checkAnswer(selectedAnswerId, correctAnswer);
        } else {
            alert("Veuillez sélectionner une réponse avant de valider !");
        }
    }
});

//fonction progress-bar
function updateProgressBar(currentQuestion, totalQuestions) {
    const progressBar = document.getElementById('progress-bar');
    let progressString = '';
    
    // Ajuster la boucle pour inclure une position supplémentaire
    for (let i = 0; i <= totalQuestions; i++) {
        if (i < currentQuestion) {
            progressString += '<img src="../public/images/ventGD.png" alt="vent" class="vent">';
        } else if (i === currentQuestion) {
            progressString += '<img src="../public/images/harry.png" alt="harry" class="wizard">';
        } else {
            progressString += ' ';
        }
    }
    
    // Si on est à la fin du quiz, s'assurer que Harry est à la dernière position
    if (currentQuestion > totalQuestions) {
        progressString = progressString.slice(0, -1) + '<img src="../public/images/harry.png" alt="harry" class="wizard">';
    }
    
    progressBar.innerHTML = progressString;
}