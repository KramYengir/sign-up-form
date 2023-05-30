const phoneInput = document.querySelector('#phone');

phoneInput.addEventListener('keyup', (e) =>{
  if(!e.target.validity.patternMismatch){
    e.target.setCustomValidity('');
  }
  else{
    e.target.setCustomValidity('Please Enter a Number Between 7 - 12 Digits Long!');
  }

  updateInvalidStatus(e.target);
})

/* phoneInput.addEventListener('change', (e) =>{
    e.target.setCustomValidity('');
    changeInvalidStatus(e.target);
}) */

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
