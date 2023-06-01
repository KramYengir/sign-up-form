const phoneInput = document.querySelector('#phone');

/*
create an array for the input elements
*/
const inputElements = [...document.querySelectorAll('input')];


/* Add eventlisteners to all inputElements,
updating the invalid/valid class status on
focus and each key press 
*/
inputElements.forEach(input =>{
  //Set the default browser error message to blank
  

  input.addEventListener('keyup', (e) =>{
    updateInvalidStatus(e.target);
  })

  input.addEventListener('focus', (e) =>{
    updateInvalidStatus(e.target);
  })
})


/* For the phone number field,
we provide a more useful error msg for
when the number is too short/long 
 */
/* phoneInput.addEventListener('keyup', (e) =>{

  e.target.setCustomValidity('');

  if(!e.target.validity.patternMismatch){
    displayErrorMsg('', e.target)
  }
  else{
    displayErrorMsg('Please Enter a Number Between 7 - 12 Digits Long!', e.target);
  }

  updateInvalidStatus(e.target);
}) */

/* A function that checks if the provided 
input element is valid or not, then adding/
removing the 'invalid' class accordingly
 */
const updateInvalidStatus = (input) =>{
    if(!input.validity.valid){
        input.classList.add('invalid');
        determineErrorMsg(input);
    }
    else{
        input.classList.remove('invalid');
        displayErrorMsg('', input)
    }
}

const determineErrorMsg = (input) =>{
  if(input.id.includes('name')){
    displayErrorMsg('-Please enter your name', input)
  }
  else if(input.id.includes('email')){
    displayErrorMsg('-Please enter a valid email  ', input)
  }
  else if(input.id.includes('phone')){
    displayErrorMsg('-Please enter a number between 7 - 12 digits',input)
  }
  else if(!input.id.includes('confirm')){
    displayErrorMsg("- Password must be at least 8 characters\n long and contain at least:\n- 1 uppercase letter\n- 1 lowercase letter\n- 1 number", input);
  }
}

/* A simple function that adds text to a div
which sits underneath ecah input field, used to
display error msgs if needed
*/
const displayErrorMsg = (msg, inputElement) => {
  inputElement.nextElementSibling.textContent = msg;
}

