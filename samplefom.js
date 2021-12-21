function validateInput() {
    // Write your code here.
    let valid = true;
    const delighted = document.querySelector('#delighted');
    const errorMessage = document.querySelector('.error-message');
    const donate = document.querySelector('#donate');
    const notdelighted =  document.querySelector('#not-delighted');
    const reason = document.querySelector('#reason');
   // errorMessage.innerHTML = '"RULE 1 BROKEN", "RULE 2 BROKEN" or "BOTH RULES BROKEN"'
    if(delighted.checked === false && donate.checked === true ){
        valid = false;
        donate.enabled = false;
       errorMessage.innerHTML = '"RULE 1 BROKEN", "RULE 2 BROKEN" or "BOTH RULES BROKEN"'
    }
    
    if(notdelighted.checked === true && reason !== '' ){
        valid = false;
        errorMessage.innerHTML = '"RULE 1 BROKEN", "RULE 2 BROKEN" or "BOTH RULES BROKEN"'
    }
    return valid;
  }
  
  document.body.innerHTML = `
  <div class="error-message">
    <!-- Display error message here -->
  </div>
  
  <form id="feedback" onsubmit="return validateInput()">
    <input type="radio" id="delighted" name="delighted" checked="checked" required /> Delighted
    <input type="checkbox" id="donate" name="donate" /> Donate<br />
    <input type="radio" id="not-delighted" name="delighted" required /> Not delighted
    <input type="text" id="reason" name="reason" /> Reason<br />
    <input  id="submit" type="submit" value="Submit" />
  </form>`;
  
  document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
    });
  validateInput();
  
  console.log(document.getElementsByClassName("error-message")[0].innerHTML);