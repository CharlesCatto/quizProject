import gameContext from "./gameContext.js";

function popUp() {
// Logique Serpentard
document.querySelector('#Serpentard').addEventListener('click', () => {
  gameContext.theme = 'Serpentard'; // Sauvegarde tu thème.

  for (const element of document.querySelectorAll('.customizable')) {
    element.classList.add(gameContext.theme); // Application du thème.
  }
  for (const element of document.querySelectorAll('.customizable')) {
    element.classList.remove('Serdaigle', 'Gryffondor', 'Poufsouffle');
  }
})

  // Logique Serdaigle
document.querySelector('#Serdaigle').addEventListener('click', () => {
  gameContext.theme = 'Serdaigle'; // Sauvegarde tu thème.

  for (const element of document.querySelectorAll('.customizable')) {
    element.classList.add(gameContext.theme); // Application du thème.
  }
  for (const element of document.querySelectorAll('.customizable')) {
    element.classList.remove('Serpentard', 'Gryffondor', 'Poufsouffle');
// Suppression des autres thèmes.
  }
})
  // Logique Gryffondor
document.querySelector('#Gryffondor').addEventListener('click', () => {
  gameContext.theme = 'Gryffondor'; // Sauvegarde tu thème.

  for (const element of document.querySelectorAll('.customizable')) {
    element.classList.add(gameContext.theme); // Application du thème.
  }
  for (const element of document.querySelectorAll('.customizable')) {
    element.classList.remove('Serdaigle', 'Serpentard', 'Poufsouffle'); // Suppression des autres thèmes.
  }
})

// Logique Poufsouffle
document.querySelector('#Poufsouffle').addEventListener('click', () => {
  gameContext.theme = 'Poufsouffle'; // Sauvegarde tu thème.

  for (const element of document.querySelectorAll('.customizable')) {
    element.classList.add(gameContext.theme); // Application du thème.
  }
  for (const element of document.querySelectorAll('.customizable')) {
    element.classList.remove('Serdaigle', 'Gryffondor', 'Serpentard'); // Suppression des autres thèmes.
  }
})
}


export default popUp;
