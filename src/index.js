<<<<<<< HEAD

QUESTIONS.addEventListener('click', (e) => {
    if (e.target.classList.contains('answer-btn')) {
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.remove('selected');
        });

=======
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
    QUESTIONS.innerHTML = `
        <h2>Quiz terminé !</h2>
        <p>Votre score : ${score} / ${questionsToAsk.length}</p>
        <button id="restart">Rejouer</button>
    `;
    document.getElementById('restart').addEventListener('click', () => {
        location.reload();
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
>>>>>>> 0561165fba996a4d226ec7e31ad3dc7d508dc58f
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