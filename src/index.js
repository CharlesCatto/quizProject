import createQuestion from "./cardQuestion.js";
import questionsToAsk from "./questionsToAsk.js";
import displayPopup from "./popUp.js";


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
    clearInterval(timer);
    // Remplacer l'icône du timer par Hogwarts
    timerElement.innerHTML = `
        <img src="../public/images/hogward.png" alt="Hogwarts" class="hogward">
        <span>--</span>
    `;
    // Mettre à jour la barre de progression une dernière fois
    updateProgressBar(questionsToAsk.length, questionsToAsk.length, true);

    QUESTIONS.innerHTML = `
    <div id="end">
        <h2>Félicitation ! Tu as fini le quiz des grands sorciers</h2>
        <p class="twp-intro">Votre score : ${score} / ${questionsToAsk.length}</p>
        <button id="restart">Rejouer</button>
        </div>
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
QUESTIONS.innerHTML = `<div id="twp-container">
        <div id="twp-popup">
          <h2 id="twp-popup-title">Monte dans le Poudlard Express !</h2>
        
            <p class="twp-intro" id= "intro"> Avant de passer cette épreuve, choisi la maison qui te correspond. Chacune des maisons de Poudlard a 
              quelque chose d'unique à offrir:
            </p>
              <p class="twp-intro"> <em class="chosenHouse">Serdaigle</em>: Toujours en quête de nouvelles idées.</p>
              <div id="twp-popup-footer"><button id="Serdaigle">Serdaigle</button></div>
              <p class="twp-intro"> <em class="chosenHouse">Serpentard</em>: Déterminer à atteindre tes objectifs.</p>
              <div id="twp-popup-footer"><button id="Serpentard">Serpentard</button> </div>
              <p class="twp-intro"> <em class="chosenHouse">Poufsouffle</em>: Tu valorises la justice et l'amitié.</p> 
              <div id="twp-popup-footer"><button id="Poufsouffle">Poufsouffle</button></div>
              <p class="twp-intro"> <em class="chosenHouse">Gryffondor</em>: Affronter tous les défis avec bravoure.</p>
              <div id="twp-popup-footer"><button id="Gryffondor">Gryffondor</button> 
         </div>
         <button id="start" classe="customizable">START</button>
        </div>
        </div>
        `;

document.getElementById("start").addEventListener("click", () => {
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
function updateProgressBar(currentQuestion, totalQuestions, isFinished = false) {
    const progressBar = document.getElementById('progress-bar');
    let progressString = '';
    
    for (let i = 0; i < totalQuestions; i++) {
        if (i < currentQuestion) {
            progressString += '<img src="../public/images/wagon.png" alt="wagons" class="wagon">';
        }
    }
    
    // Ajouter la locomotive à la fin, qu'on soit en cours de quiz ou à la fin
    progressString += '<img src="../public/images/locomotive.png" alt="loco" class="loco">';
    
    progressBar.innerHTML = progressString;
}

displayPopup();