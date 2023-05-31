const phoneInput = document.querySelector('#phone');


/*
create an array for the input elements,
iterate thru it, adding listeners,
on keyup, determine validity and
add/remove invalid class accordingly
*/

const inputElements = [...document.querySelectorAll('input')];

inputElements.forEach(input =>{
  input.addEventListener('keyup', (e) =>{
    updateInvalidStatus(e.target);
  })

  input.addEventListener('focus', (e) =>{
    updateInvalidStatus(e.target);
  })
})


phoneInput.addEventListener('keyup', (e) =>{
  if(!e.target.validity.patternMismatch){
    e.target.setCustomValidity('');
  }
  else{
    e.target.setCustomValidity('Please Enter a Number Between 7 - 12 Digits Long!');
  }

  updateInvalidStatus(e.target);
})


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
