// Permet de reset un theme
function resetTheme() {
  document.querySelector('.customizable').classList.remove('Serpentard', 'Gryffondor', 'Poufsouffle', 'Serdaigle');
}

function popUp() {
  // Logique Serpentard
  document.querySelector('#Serpentard').addEventListener('click', () => {
    for (const element of document.querySelectorAll('.customizable')) {
      element.classList.add('Serpentard')
      console.log(element);
    }
    for (const element of document.querySelectorAll('.customizable')) {
      element.classList.remove('Serdaigle', 'Gryffondor', 'Poufsouffle');
      console.log(element);
    }
  })

  // Logique Serdaigle
  document.querySelector('#Serdaigle').addEventListener('click', () => {
    for (const element of document.querySelectorAll('.customizable')) {
      element.classList.add('Serdaigle')
      console.log(element);
    }
    for (const element of document.querySelectorAll('.customizable')) {
      element.classList.remove('Serpentard', 'Gryffondor', 'Poufsouffle');
      console.log(element);
    }
  })

  // Logique Gryffondor
  document.querySelector('#Gryffondor').addEventListener('click', () => {
    for (const element of document.querySelectorAll('.customizable')) {
      element.classList.add('Gryffondor')
      console.log(element);
    }
    for (const element of document.querySelectorAll('.customizable')) {
      element.classList.remove('Serdaigle', 'Serpentard', 'Poufsouffle');
      console.log(element);
    }
  })

  // Logique Poufsouffle
  document.querySelector('#Poufsouffle').addEventListener('click', () => {
    for (const element of document.querySelectorAll('.customizable')) {
      element.classList.add('Poufsouffle')
      console.log(element);
    }
    for (const element of document.querySelectorAll('.customizable')) {
      element.classList.remove('Serdaigle', 'Gryffondor', 'Serpentard');
      console.log(element);
    }
  })
}


export default popUp;
