function createQuestion(question) {
    let addQuestion = `
    <article class="question">
        

              
        <fieldset class="listReponse">
            <legend>${question.legend}</legend>
            
            <input type="button" id="button" name="reponse1" value="Reponse 1" checked />

            <input type="button" id="button" name="reponse2" value="Reponse 2" checked />

            <input type="button" id="button" name="reponse3" value="Reponse 3" checked />

            <input type="button" id="button" name="reponse4" value="Reponse 4" checked />


            
          </fieldset>
      </article>`;
      
      return addQuestion;

}