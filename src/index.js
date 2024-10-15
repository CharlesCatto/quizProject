
QUESTIONS.addEventListener('click', (e) => {
    if (e.target.classList.contains('answer-btn')) {
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.remove('selected');
        });

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