//password inputs
const passwordA = document.querySelector('#password');
const passwordB = document.querySelector('#password-confirm');

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

/* Here we sort out the password matching aspect.
*/

/* First we disable the second password input until
the first one is valid
*/

passwordA.addEventListener('focus', (e)=>{
  passwordB.disabled = !passwordA.validity.valid; 
})

passwordA.addEventListener('keyup', (e)=>{
  passwordB.disabled = !passwordA.validity.valid; 
})

//Then check is the passwords match

const checkPasswordMatch = () =>{
  if(passwordA.value == passwordB.value){
    passwordB.classList.remove('invalid');
    passwordB.setCustomValidity('');
    displayErrorMsg('', passwordB)
  }
  else{
    passwordB.classList.add('invalid');
    passwordB.setCustomValidity('Passwords must match!');
    displayErrorMsg('-Passwords must match!', passwordB)
  }
}

passwordB.addEventListener('keyup', checkPasswordMatch);


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
    displayErrorMsg("- Password must be at least 8 characters long\n and contain at least:\n- 1 uppercase letter\n- 1 lowercase letter\n- 1 number", input);
  }
}

/* A simple function that adds text to a div
which sits underneath ecah input field, used to
display error msgs if needed
*/
const displayErrorMsg = (msg, inputElement) => {
  inputElement.nextElementSibling.textContent = msg;
}

