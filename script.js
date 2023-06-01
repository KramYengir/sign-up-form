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
phoneInput.addEventListener('keyup', (e) =>{
  if(!e.target.validity.patternMismatch){
    e.target.setCustomValidity('');
  }
  else{
    e.target.setCustomValidity('Please Enter a Number Between 7 - 12 Digits Long!');
  }

  updateInvalidStatus(e.target);
})

/* A function that checks if the provided 
input element is valid or not, then adding/
removing the 'invalid' class accordingly
 */
const updateInvalidStatus = (input) =>{
    if(!input.validity.valid){
        input.classList.add('invalid');
        console.log('invalid')
    }
    else{
        input.classList.remove('invalid');
        console.log('Valid')
    }
}

/* A simple function that adds text to a div
which sits underneath ecah input field, used to
display error msgs if needed
*/
const displayErrorMsg = (msg, inputElement) => {
  inputElement.nextElementSibling.textContent = msg;
}

