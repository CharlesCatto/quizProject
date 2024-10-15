function createQuestion(question) {
    let addQuestion =`
        <article class="question">
          <fieldset class="listReponse">
            <legend>${question.legend}</legend>
  
            <button class="answer-btn" id="R1" name="answer">${question.R1}</button>
            <button class="answer-btn" id="R2" name="answer">${question.R2}</button>
            <button class="answer-btn" id="R3" name="answer">${question.R3}</button>
            <button class="answer-btn" id="R4" name="answer">${question.R4}</button>
  
          </fieldset>
          
            <button id="validate">VALIDER</button>
          
        
        </article>`;
    
    return addQuestion;
  }
  
  export default createQuestion;