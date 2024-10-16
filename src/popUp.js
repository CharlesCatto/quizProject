function displayPopup() {

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
  
    function resetTheme() {
      document.querySelector('.customizable').classList.remove('Serpentard', 'Gryffondor', 'Poufsouffle');
    }
  
    function displayPopup() {
      document.querySelector('#Serdaigle').addEventListener('click', () => {
        resetTheme();
        document.querySelector('.customizable').classList.add('.Serdaigle');
      })
  
      document.querySelector('#Serpentard').addEventListener('click', () => {
        resetTheme();
        document.querySelector('.customizable').classList.add('.Serpentard');
      })
  
      document.querySelector('#Gryffondor').addEventListener('click', () => {
        resetTheme();
        document.querySelector('.customizable').classList.add('.Gryffondor');
      })
  
      document.querySelector('#Poufsouffle').addEventListener('click', () => {
        resetTheme();
        document.querySelector('.customizable').classList.add('.Poufsouffle');
      })
    }
  }
  
  
  export default displayPopup;